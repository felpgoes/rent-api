import { IRequest } from '@DTO/Request.DTO'
import { Response } from 'express'
import { UpdateUserUseCase } from './UpdateUser'

export class UpdateUserController {
  constructor (
        private updateUserUseCase: UpdateUserUseCase
  ) {}

  async handle (req: IRequest, res: Response): Promise<Response> {
    try {
      const userData = await this.updateUserUseCase.execute(req.body, req.user)

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
