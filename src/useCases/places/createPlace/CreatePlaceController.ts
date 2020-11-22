import { Request, Response } from 'express'
import { CreatePlaceUseCase } from './CreatePlace'

export class CreatePlaceController {
  constructor (
        private createPlaceUseCase: CreatePlaceUseCase
  ) {}

  async handle (req: Request, res: Response): Promise<Response> {
    // name owner address photos contact description
    const {
      name, owner, address, photos, contact, description
    } = req.body

    try {
      await this.createPlaceUseCase.execute({
        name, owner, address, photos, contact, description
      })

      return res.status(201).send()
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexepected error.'
      })
    }
  }
}
