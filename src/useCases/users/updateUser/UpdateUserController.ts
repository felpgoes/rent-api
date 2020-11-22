import { Request, Response } from 'express'
import { UpdateUserUseCase } from './updateUser'

export class UpdateUserUseCaseController {
  constructor (
        private updateUserUseCaseUseCase: UpdateUserUseCase
  ) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
    //   const { id } = req.params
    //   const userData = await this.updateUserUseCaseUseCase.execute(id)

      return res.status(200).json({
        data: 'olá'
      })
    } catch (err) {
      return res.status(err.statusCode ?? 400).json({
        message: err.message || 'Unexepected error.'
      })
    }
  }
}
