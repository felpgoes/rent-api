import { createUserController } from './useCases/users'
import { Router } from 'express'

const router = Router()

router.post('/users', (req, res) => {
  return createUserController.handle(req, res)
})

export { router }
