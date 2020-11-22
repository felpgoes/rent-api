import { User } from '../../../entities/User'
import { IUsersRepository } from '../../../repositories/IUsersRepository'

export class GetUserUseCase {
  constructor (
        private usersRepository: IUsersRepository
  ) { }

  async execute (id: string) {
    const userData = await this.usersRepository.findById(id)

    if (!userData) {
      const error: any = new Error('User not exists.')
      error.statusCode = 404
      throw error
    }

    return new User(userData, id)
  }
}
