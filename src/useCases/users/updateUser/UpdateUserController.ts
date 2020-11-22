import { Request, Response } from 'express'
import { UpdateUserUseCase } from './UpdateUser'

export class UpdateUserController {
  constructor (
        private updateUserUseCase: UpdateUserUseCase
  ) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const userData = await this.updateUserUseCase.execute(req.body)

      return res.status(200).json({
        data: userData
      })
    } catch (err) {
      return res.status(err.statusCode ?? 400).json({
        message: err.message || 'Unexepected error.'
      })
    }
  }
}
