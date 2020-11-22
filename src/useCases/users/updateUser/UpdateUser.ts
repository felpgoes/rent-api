import { UserUpdate } from '../../../entities/UserUpdate'
import { User } from '../../../entities/User'
import { IUsersRepository } from '../../../repositories/IUsersRepository'

export class UpdateUserUseCase {
  constructor (
        private usersRepository: IUsersRepository
  ) { }

  async execute (user: UserUpdate) {
    console.log('user')
    const existingUser = await this.usersRepository.findById(user.id)

    if (!existingUser) {
      const error: any = new Error('User not exists.')
      error.statusCode = 404
      throw error
    }

    const newUserData = await this.usersRepository.update(user)

    return new User(newUserData, existingUser.id)
  }
}
