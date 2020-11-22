import { IRequest } from '@DTO/Request.DTO'
import { Response } from 'express'
import { CreatePlaceUseCase } from './CreatePlace'

export class CreatePlaceController {
  constructor (
        private createPlaceUseCase: CreatePlaceUseCase
  ) {}

  async handle (req: IRequest, res: Response): Promise<Response> {
    // name owner address photos contact description
    const {
      name, address, photos, contact, description
    } = req.body
    const owner = req.user.id
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
