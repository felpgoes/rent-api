import { createUserController, getUserController, authUserController, validationTokenController } from './useCases/users'
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

export { router }
