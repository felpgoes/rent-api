import { AuthToken } from '@entities/AuthToken'
import { IAuthRepository } from '../IAuthRepository'
import Database from '../../lib/Database'
import { Token } from '../../entities/Token'

const db = Database.getConnection()

export class AuthenticateUserRepository implements IAuthRepository {
  async validate (tokenData: Token): Promise<any> {
    const data = await db
      .select('*')
      .from('login_token')
      .where('email', tokenData.email)
      .andWhere('token', tokenData.token)
      .andWhereRaw('expires > now() ')

    if (data[0]) {
      const selectedToken = data[0]
      await db('login_token').where('id', selectedToken.id).del()

      return data[0]
    }
  }

  async save (data: AuthToken): Promise<void> {
    await db('login_token').where('email', data.email).del()

    return db.insert(data).into('login_token')
  }
}
