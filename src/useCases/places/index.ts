// start repositories
import { PostgresPlacesRepository } from '../../repositories/implementations/PostgresPlacesRepository'
//  repositories

// start CreatePlace use case
import { CreatePlaceUseCase } from './createPlace/CreatePlace'
import { CreatePlaceController } from './createPlace/CreatePlaceController'
// end CreatePlace use case

// start GetPlace use case
import { GetPlaceUseCase } from './getPlace/GetPlace'
import { GetPlaceController } from './getPlace/GetPlaceController'
// end GetPlace use case

// start ListPlaces use case
import { ListPlaceUseCase } from './listPlaces/ListPlaces'
import { ListPlaceController } from './listPlaces/ListPlacesController'
// end ListPlaces use case

const postgresPlacesRepository = new PostgresPlacesRepository()

const createPlaceUseCase = new CreatePlaceUseCase(
  postgresPlacesRepository
)

const createPlaceController = new CreatePlaceController(
  createPlaceUseCase
)

const getPlaceUseCase = new GetPlaceUseCase(
  postgresPlacesRepository
)

const getPlaceController = new GetPlaceController(
  getPlaceUseCase
)

const listPlacesUseCase = new ListPlaceUseCase(
  postgresPlacesRepository
)

const listPlacesController = new ListPlaceController(
  listPlacesUseCase
)

export {
  createPlaceController, createPlaceUseCase,
  getPlaceController, getPlaceUseCase,
  listPlacesController, listPlacesUseCase
}
