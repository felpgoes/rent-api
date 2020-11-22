import { User } from '@entities/User'
import { UserUpdate } from '@entities/UserUpdate'

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<any>;
    save(user: User): Promise<void>;
    update(user: UserUpdate): Promise<User>
}
