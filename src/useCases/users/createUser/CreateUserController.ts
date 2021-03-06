import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUser'

export class CreateUserController {
  constructor (
        private createUserUseCase: CreateUserUseCase
  ) {}

  async handle (req: Request, res: Response): Promise<Response> {
    const {
      name, email, password, emailConfirmation, twoFactorConfirmation, username, document, documentType
    } = req.body

    try {
      await this.createUserUseCase.execute({
        name,
        email,
        password,
        emailConfirmation,
        twoFactorConfirmation,
        username,
        document,
        documentType
      })

      return res.status(201).send()
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexepected error.'
      })
    }
  }
}
