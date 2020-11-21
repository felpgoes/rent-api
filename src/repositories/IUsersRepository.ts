import { User } from '@entities/User'

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<any>
    save(user: User): Promise<void>;
}
