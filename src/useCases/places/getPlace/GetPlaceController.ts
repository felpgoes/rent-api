import { Request, Response } from 'express'
import { GetPlaceUseCase } from './GetPlace'

export class GetPlaceController {
  constructor (
        private getPlaceUseCase: GetPlaceUseCase
  ) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const userData = await this.getPlaceUseCase.execute(id)

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
