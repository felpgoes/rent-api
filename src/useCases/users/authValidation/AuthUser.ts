import { ILoginUserDTO } from '@DTO/LoginUser.DTO'
import { IAuthRepository } from '../../../repositories/IAuthRepository'
import { IUsersRepository } from '../../../repositories/IUsersRepository'
import { compare } from 'bcrypt'
import { AuthToken } from '../../../entities/AuthToken'
import moment from 'moment'
import { IMailProvider } from '@providers/IMailProvider'
import { v4 } from 'uuid'

export class AuthUserUseCase {
  constructor (
    private authRepository: IAuthRepository,
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) { }

  async execute (data: ILoginUserDTO) {
    const userData = await this.usersRepository.findByEmail(data.email)

    if (!userData) {
      const error: any = new Error('User not exists.')
      error.statusCode = 404
      throw error
    }

    const validPassword = await compare(data.password, userData.password)

    console.log('validPass: ', validPassword)
    if (!validPassword) {
      const error: any = new Error('Wrong password.')
      error.statusCode = 401
      throw error
    }

    const tokenCode = v4()

    const tokenData = new AuthToken({
      email: userData.email,
      token: tokenCode,
      expires: moment().add(1, 'h')
    })
    const authData = await this.authRepository.save(tokenData)

    const { password, ...cleanUserData } = userData
    return {
      token: {
        accessToken: authData.token,
        expiresAt: authData.expires
      },
      user: cleanUserData
    }
  }
}
