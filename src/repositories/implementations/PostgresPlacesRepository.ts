// import { User } from '@entities/User'
// import { IPlacesRepository } from '../IPlacesRepository'
// import Database from '../../lib/Database'
// import { hash } from 'bcrypt'

// const db = Database.getConnection()

// export class PostgresPlacesRepository implements IPlacesRepository {
//   async findByOwner (email: string): Promise<any> {
//     const user = await db.select('*').from('users').where('email', email)
//     console.log('user: ', user[0])
//     if (user[0]) {
//       const userData = this.normalizeToApi(user[0])
//       console.log('userData: ', userData)
//       return userData
//     }
//   }

//   async create (user: User): Promise<void> {
//     const password = await hash(user.password, 10)
//     const normalized = this.normalizeToDB({ ...user, password })
//     console.log('normalized: ', normalized)
//     return db.insert(normalized).into('users')
//   }

//   async findById (id: string): Promise<any> {
//     console.log('id: ', id)
//     const user = await db.select('*').from('users').where('id', id).limit(1)
//     console.log('user: ', user[0])
//     if (user[0]) {
//       const userData = this.normalizeToApi(user[0])
//       console.log('userData: ', userData)
//       return userData
//     }
//   }

//   findByFilter (email: string): Promise<User> {}
//   update (user: User): Promise<void> {};
//   delete (user: User): Promise<void> {};

//   private normalizeToDB (data: User) {
//     return {
//       id: data.id,
//       name: data.name,
//       email: data.email,
//       password: data.password,
//       email_confirmation: data.emailConfirmation,
//       two_factor_confirmation: data.twoFactorConfirmation,
//       username: data.username,
//       document: data.document,
//       document_type: data.documentType
//     }
//   }

//   private normalizeToApi (data: any) {
//     return {
//       id: data.id,
//       name: data.name,
//       email: data.email,
//       password: data.password,
//       emailConfirmation: data.email_confirmation,
//       twoFactorConfirmation: data.two_factor_confirmation,
//       username: data.username,
//       document: data.document,
//       documentType: data.document_type
//     } as User
//   }
// }
