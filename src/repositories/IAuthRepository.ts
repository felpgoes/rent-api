import { AuthToken } from '@entities/AuthToken'
import { Token } from '../entities/Token'

export interface IAuthRepository {
    validate(data: Token): Promise<AuthToken>;
    save(data: AuthToken): Promise<void>;
}
