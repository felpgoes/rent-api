import { Request, Response } from 'express'
import { ListPlaceUseCase } from './ListPlaces'

export class ListPlaceController {
  constructor (
        private listPlaceUseCase: ListPlaceUseCase
  ) {}

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const { page } = req.query
      const data = await this.listPlaceUseCase.execute(page)

      return res.status(200).json(data)
    } catch (err) {
      return res.status(err.statusCode ?? 400).json({
        message: err.message || 'Unexepected error.'
      })
    }
  }
}
