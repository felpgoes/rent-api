import { UserUpdate } from '../../../entities/UserUpdate'
// import { User } from '../../../entities/User'
import { IUsersRepository } from '../../../repositories/IUsersRepository'

export class UpdateUserUseCase {
  constructor (
        private usersRepository: IUsersRepository
  ) { }

  async execute (user: UserUpdate) {
    // const userData = await this.usersRepository.update(user)

    return 'ola'// new User(userData, userData.id)
  }
}
