import { Place } from '../../../entities/Place'
import { IPlacesRepository } from '../../../repositories/IPlacesRepository'

export class GetPlaceUseCase {
  constructor (
        private placeRepository: IPlacesRepository
  ) { }

  async execute (id: string) {
    const placeData = await this.placeRepository.findById(id)

    if (!placeData) {
      const error: any = new Error('Place not exists.')
      error.statusCode = 404
      throw error
    }

    return new Place(placeData, id)
  }
}
