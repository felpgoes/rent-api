import { ICreateUserRequestDTO } from '@DTO/CreateUser.DTO'
import { User } from '../../../entities/User'
import { IUsersRepository } from '../../../repositories/IUsersRepository'
import { IMailProvider } from '@providers/IMailProvider'

export class CreateUserUseCase {
  constructor (
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute (data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)
    console.log('userAlreadyExists: ', userAlreadyExists)
    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    const user = new User(data)
    await this.usersRepository.save(user)

    await this.mailProvider.sendEmail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'Equipe Rent',
        email: 'noreply@rent.io'
      },
      subject: 'Seja bem-vindo à plataforma!',
      body: '<p>Você já pode fazer login na nossa plataforma!</p>'
    })
  }
}
