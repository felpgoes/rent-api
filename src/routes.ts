import { createUserController, getUserController } from './useCases/users'
import { Router } from 'express'

const router = Router()

router.post('/users', (req, res) => {
  return createUserController.handle(req, res)
})

router.get('/users/:id', (req, res) => {
  return getUserController.handle(req, res)
})

export { router }
