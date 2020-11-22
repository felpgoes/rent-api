import { createUserController, getUserController, authUserController, updateUserController } from './useCases/users'
import { createPlaceController, getPlaceController, listPlacesController } from './useCases/places'
import { Router } from 'express'
import * as middlewares from './middlewares'
import { IRequest } from '@DTO/Request.DTO'

const router = Router()

router.post('/users', (req, res) => {
  return createUserController.handle(req, res)
})

router.post('/login', (req, res) => {
  return authUserController.handle(req, res)
})

router.use(middlewares.authentication)

router.get('/users/:id', (req, res) => {
  return getUserController.handle(req, res)
})

router.post('/place', (req, res) => {
  return createPlaceController.handle(req as IRequest, res)
})

router.get('/place/list', (req, res) => {
  return listPlacesController.handle(req, res)
})

router.get('/place/:id', (req, res) => {
  return getPlaceController.handle(req, res)
})

router.put('/user', (req, res) => {
  return updateUserController.handle(req as IRequest, res)
})

export { router }
