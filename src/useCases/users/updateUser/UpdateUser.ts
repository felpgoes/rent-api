import { UserUpdate } from '../../../entities/UserUpdate'
import { User } from '../../../entities/User'
import { IUsersRepository } from '../../../repositories/IUsersRepository'

export class UpdateUserUseCase {
  constructor (
        private usersRepository: IUsersRepository
  ) { }

  async execute (data: UserUpdate, user: any) {
    console.log('data')
    const existingUser = await this.usersRepository.findById(data.id)

    if (existingUser.id !== user.id) {
      const error: any = new Error('Not authorized to update user.')
      error.statusCode = 401
      throw error
    }

    if (!existingUser) {
      const error: any = new Error('User not exists.')
      error.statusCode = 404
      throw error
    }

    const newUserData = await this.usersRepository.update(data)

    return new User(newUserData, existingUser.id)
  }
}
