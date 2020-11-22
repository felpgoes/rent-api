import { Request, Response } from 'express'
import { GetUserCase } from './GetUser'

export class GetUserCaseController {
  constructor (
        private GetUserCaseUseCase: GetUserCase
  ) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const userData = await this.GetUserCaseUseCase.execute(id)

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
