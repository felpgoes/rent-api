import { Request, Response } from 'express'
import { GetUserUseCase } from './GetUser'

export class GetUserUseCaseController {
  constructor (
        private GetUserUseCaseUseCase: GetUserUseCase
  ) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const userData = await this.GetUserUseCaseUseCase.execute(id)

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
