import { Request, Response } from 'express'
import { ValidateTokenUseCase } from './ValidateToken'

export class ValidateTokenController {
  constructor (
        private validateTokenUseCase: ValidateTokenUseCase
  ) {}

  async handle (req: Request, res: Response): Promise<Response> {
    const {
      email, token
    } = req.body

    try {
      const result = await this.validateTokenUseCase.execute({
        email,
        token
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
