import { User } from '@entities/User'
import { UserUpdate } from '@entities/UserUpdate'
import { IUsersRepository } from '../IUsersRepository'
import Database from '../../lib/Database'
import { hash } from 'bcrypt'
import Axios from 'axios'

const db = Database.getConnection()

export class PostgresUsersRepository implements IUsersRepository {
  async findByEmail (email: string): Promise<any> {
    const user = await db.select('*').from('users').where('email', email)
    if (user[0]) {
      const userData = this.normalizeToApi(user[0])
      return userData
    }
  }

  async save (user: User): Promise<void> {
    const password = await hash(user.password, 10)
    const imageData = await Axios({
      method: 'get',
      url: `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_KEY}&collections=277102`
    })
    const image = imageData.data.urls.regular
    const normalized = this.normalizeToDB({ ...user, password, image })
    return db.insert(normalized).into('users')
  }

  async findById (id: string): Promise<any> {
    const user = await db.select('*').from('users').where('id', id).limit(1)
    if (user[0]) {
      const userData = this.normalizeToApi(user[0])
      return userData
    }
  }

  async update (user: UserUpdate): Promise<User> {
    const { id, ...fixedUser } = user

    console.log('id = ', id)
    console.log('fixedUser = ', fixedUser)

    const updatedData = await db('users').update(fixedUser).where('id', '=', id).returning('*')
    console.log('updatedData', updatedData)
    return this.normalizeToApi(updatedData[0])
  }

  private normalizeToDB (data: User) {
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      email_confirmation: data.emailConfirmation,
      two_factor_confirmation: data.twoFactorConfirmation,
      username: data.username,
      document: data.document,
      document_type: data.documentType
    }
  }

  private normalizeToApi (data: any) {
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      emailConfirmation: data.email_confirmation,
      twoFactorConfirmation: data.two_factor_confirmation,
      username: data.username,
      document: data.document,
      documentType: data.document_type,
      image: data.image
    } as User
  }
}
