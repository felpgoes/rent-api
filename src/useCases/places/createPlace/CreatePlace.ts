import { ICreatePlaceDTO } from '@DTO/CreatePlace.DTO'
import { Place } from '../../../entities/Place'
import { IPlacesRepository } from '../../../repositories/IPlacesRepository'

export class CreatePlaceUseCase {
  constructor (
    private placesRepository: IPlacesRepository
  ) {}

  async execute (data: ICreatePlaceDTO) {
    // const userAlreadyExists = await this.usersRepository.findByEmail(data.email)
    // console.log('userAlreadyExists: ', userAlreadyExists)
    // if (userAlreadyExists) {
    //   throw new Error('User already exists.')
    // }

    const place = new Place(data)
    await this.placesRepository.create(place)
  }
}
