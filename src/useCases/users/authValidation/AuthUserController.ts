import { Request, Response } from 'express'
import { AuthUserUseCase } from './AuthUser'

export class AuthUserController {
  constructor (
        private authUserUseCase: AuthUserUseCase
  ) {}

  async handle (req: Request, res: Response): Promise<Response> {
    const {
      email, password
    } = req.body

    try {
      const result = await this.authUserUseCase.execute({
        email,
        password
      })
      console.log('result: ', result)
      return res.status(200).send(result)
    } catch (err) {
      return res.status(err.statusCode ?? 400).json({
        message: err.message || 'Unexepected error.'
      })
    }
  }
}
