import { User } from '@entities/User'

export interface IPlacesRepository {
    findByFilter(email: string): Promise<User>;
    findByOwner(email: string): Promise<User>;
    findById(id: string): Promise<any>
    create(user: User): Promise<void>;
    update(user: User): Promise<void>;
    delete(user: User): Promise<void>;
}
