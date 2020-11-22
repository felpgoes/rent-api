// start providers
import { MailTrapMailProvider } from '../../providers/implementations/mailTrapMailProvider'
// end providers

// start repositories
import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository'
import { AuthenticateUserRepository } from '../../repositories/implementations/AuthenticateUserRepository'
//  repositories

// start createUser use case
import { CreateUserUseCase } from './createUser/CreateUser'
import { CreateUserController } from './createUser/CreateUserController'
// end createUser use case

// start getUser use case
import { GetUserUseCase } from './getUser/GetUser'
import { GetUserUseCaseController } from './getUser/GetUserController'
// end getUser use case

// start getUser use case
import { AuthUserUseCase } from './authValidation/AuthUser'
import { AuthUserController } from './authValidation/AuthUserController'
// end getUser use case

// end ValidateToken use case
import { ValidateTokenUseCase } from './tokenValidation/ValidateToken'
import { ValidateTokenController } from './tokenValidation/ValidateTokenController'
// end ValidateToken use case

const mailTrapMailProvider = new MailTrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()
const authenticationUserRepository = new AuthenticateUserRepository()

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailTrapMailProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

const getUserUseCase = new GetUserUseCase(
  postgresUsersRepository
)

const getUserController = new GetUserUseCaseController(
  getUserUseCase
)

const authUserUseCase = new AuthUserUseCase(
  authenticationUserRepository,
  postgresUsersRepository,
  mailTrapMailProvider
)

const authUserController = new AuthUserController(
  authUserUseCase
)

const validationTokenUseCase = new ValidateTokenUseCase(
  authenticationUserRepository,
  postgresUsersRepository
)

const validationTokenController = new ValidateTokenController(
  validationTokenUseCase
)

export {
  createUserController, createUserUseCase,
  getUserController, getUserUseCase,
  authUserController, authUserUseCase,
  validationTokenController, validationTokenUseCase
}
