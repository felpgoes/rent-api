import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository'
import { MailTrapMailProvider } from '../../providers/implementations/mailTrapMailProvider'

import { CreateUserUseCase } from './CreateUser'
import { CreateUserController } from './CreateUserController'
import { GetUserCase } from './GetUser'
import { GetUserCaseController } from './GetUserController'

const mailTrapMailProvider = new MailTrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailTrapMailProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

const getUserUseCase = new GetUserCase(
  postgresUsersRepository
)

const getUserController = new GetUserCaseController(
  getUserUseCase
)

export { createUserController, createUserUseCase, getUserController, getUserUseCase }
