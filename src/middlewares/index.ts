import { NextFunction, Request, Response } from 'express'
import { PostgresUsersRepository } from '../repositories/implementations/PostgresUsersRepository'
import { IUsersRepository } from '../repositories/IUsersRepository'
import { IAuthRepository } from '../repositories/IAuthRepository'
import { AuthenticateUserRepository } from '../repositories/implementations/AuthenticateUserRepository'
import { IRequest } from '@DTO/Request.DTO'

const authentication = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authRepo: IAuthRepository = new AuthenticateUserRepository()
    const userRepo: IUsersRepository = new PostgresUsersRepository()

    if (!req.headers.authorization) {
      throw new Error('Missing Authorization header')
    }

    const token = req.headers.authorization.split(' ')[1]

    const tokenData = await authRepo.getData(token)

    if (!tokenData) {
      throw new Error('Token doesnt exist or are expired already.')
    }

    const userData = await userRepo.findByEmail(tokenData.email)

    const parsedReq = <IRequest>req

    parsedReq.user = {
      id: userData.id,
      email: userData.email,
      token: tokenData.token
    }

    next()
  } catch (error) {
    res.status(401).json({
      error: error.message
    })
  }
}

export { authentication }
