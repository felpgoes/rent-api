import { createUserController, getUserController, authUserController, validationTokenController } from './useCases/users'
import { createPlaceController, getPlaceController, listPlacesController } from './useCases/places'
import { Router } from 'express'

const router = Router()

router.post('/users', (req, res) => {
  return createUserController.handle(req, res)
})

router.get('/users/:id', (req, res) => {
  return getUserController.handle(req, res)
})

router.post('/login', (req, res) => {
  return authUserController.handle(req, res)
})

router.post('/validateToken', (req, res) => {
  return validationTokenController.handle(req, res)
})

router.post('/place', (req, res) => {
  return createPlaceController.handle(req, res)
})

router.get('/place/list', (req, res) => {
  return listPlacesController.handle(req, res)
})

router.get('/place/:id', (req, res) => {
  return getPlaceController.handle(req, res)
})

export { router }
