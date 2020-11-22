import { ILoginUserDTO } from '@DTO/LoginUser.DTO'
import { IAuthRepository } from '../../../repositories/IAuthRepository'
import { IUsersRepository } from '../../../repositories/IUsersRepository'
import { compare } from 'bcrypt'
import { AuthToken } from '../../../entities/AuthToken'
import moment from 'moment'
import { IMailProvider } from '@providers/IMailProvider'

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
    // create token
    const tokenCode = Math.random().toString(36).substring(7).toUpperCase()

    const tokenData = new AuthToken({
      email: userData.email,
      token: tokenCode,
      expires: moment().add(3, 'm')
    })
    this.authRepository.save(tokenData)

    // send email here

    await this.mailProvider.sendEmail({
      to: {
        name: userData.name,
        email: userData.email
      },
      from: {
        name: 'Equipe Rent Aí',
        email: 'felipe.goess@hotmail.com'
      },
      subject: 'Token de Login - Rent Aí',
      body: `<div>
        <p>Olá ${userData.name}!</p>
        <hr>
        <p>Seu código de login é: </p>
        <p>${tokenCode}</p>
      </div>`
    })
    return {
      email: userData.email
    }
  }
}
