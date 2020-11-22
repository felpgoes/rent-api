import { IValidateAuthDTO } from '@DTO/ValidateAuth.DTO'
import { IAuthRepository } from '../../../repositories/IAuthRepository'
import { IUsersRepository } from '../../../repositories/IUsersRepository'

export class ValidateTokenUseCase {
  constructor (
        private authRepository: IAuthRepository,
        private usersRepository: IUsersRepository
  ) { }

  async execute (data: IValidateAuthDTO) {
    const userData = await this.usersRepository.findByEmail(data.email)

    if (!userData) {
      const error: any = new Error('User not exists.')
      error.statusCode = 404
      throw error
    }

    const tokenData = await this.authRepository.validate(data)

    if (!tokenData) {
      const error: any = new Error('Token doesnt exist or are expired already.')
      error.statusCode = 404
      throw error
    }

    if (tokenData.token !== data.token) {
      const error: any = new Error('Wrong token.')
      error.statusCode = 403
      throw error
    }

    return {
      valid: true,
      email: userData.email
    }
  }
}
