import { PlaceList } from '../../../entities/PlaceList'
import { IPlacesRepository } from '../../../repositories/IPlacesRepository'

export class ListPlaceUseCase {
  constructor (
        private placeRepository: IPlacesRepository
  ) { }

  async execute (page: any) {
    const placeData = await this.placeRepository.list(page)

    return new PlaceList(placeData)
  }
}
