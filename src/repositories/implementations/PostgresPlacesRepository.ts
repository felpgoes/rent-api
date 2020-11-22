import { Place } from '@entities/Place'
import { IPlacesRepository } from '../IPlacesRepository'
import Database from '../../lib/Database'
import { v4 } from 'uuid'

const db = Database.getConnection()

export class PostgresPlacesRepository implements IPlacesRepository {
  async findById (id: string): Promise<any> {
    const placeData = await db.select('*').from('place').where('id', id)

    if (placeData[0]) {
      const placeImages = await db.select('*').from('images').where('place_id', placeData[0].id)
      const placeNormalized = this.normalizeToApi(placeData[0], placeImages)

      return placeNormalized
    }
  }

  async create (place: Place): Promise<void> {
    const normalized = await this.normalizeToDB(place)
    await Promise.all(
      [
        await db.insert(normalized.place).into('place'),
        normalized.images.map(async image => {
          await db.insert(image).into('images')
        })
      ]
    )
  }

  async list (filter: any): Promise<any> {
    const places = await this.findPerPage(filter)
    return places
  }

  private async findPerPage (pageFilter: number) {
    const page = (pageFilter) ? pageFilter - 1 : 0
    const limit = 10
    const offset = limit * page

    const count: any = await db('place').select(db.raw('SUM(1) AS cont'))
    console.log('offset: ', offset)
    console.log('count = ', count[0].cont)
    if (offset > count[0].cont) {
      throw new Error('Invalid page')
    }

    const results = await db
      .select('*')
      .from('place as pl')
      .leftJoin('images as us', 'pl.id', '=', 'us.place_id')
      .limit(limit)
      .offset(offset)

    return {
      results,
      page: page + 1,
      resultCount: results.length,
      pageCount: Math.ceil(count[0].cont / limit)
    }
  }

  private async normalizeToDB (data: Place) {
    const place = {
      id: data.id,
      street: data.address.street,
      number: data.address.number,
      complement: data.address.number,
      neighborhood: data.address.neighborhood,
      zipcode: data.address.zipcode,
      country: data.address.country,
      name: data.name,
      owner_id: data.owner,
      contact: data.contact,
      description: data.description
    }

    const images = await Promise.all(data.photos.map(async photo => {
      return {
        id: v4(),
        place_id: data.id,
        url: photo.url
      }
    }))

    return {
      place, images
    }
  }

  private normalizeToApi (data: any, images: any) {
    return {
      id: data.id,
      address: {
        street: data.street,
        number: data.number,
        complement: data.complement,
        neighborhood: data.neighborhood,
        zipcode: data.zipcode,
        country: data.country
      },
      name: data.name,
      owner: data.owner_id,
      contact: data.contact,
      description: data.description,
      photos: images.map((image: any) => ({ url: image.url }))
    } as Place
  }
}
