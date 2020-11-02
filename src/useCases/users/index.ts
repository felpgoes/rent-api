import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository'
import { MailTrapMailProvider } from '../../providers/implementations/mailTrapMailProvider'
import { CreateUserUseCase } from './CreateUser'
import { CreateUserController } from './CreateUserController'

const mailTrapMailProvider = new MailTrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailTrapMailProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserController, createUserUseCase }
