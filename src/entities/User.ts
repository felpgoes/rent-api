import { v4 } from 'uuid'

export class User {
    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;
    public emailConfirmation: boolean;
    public twoFactorConfirmation: boolean;
    public username: string;
    public document: string;
    public documentType: string;
    public image?: string;

    constructor (props: Omit<User, 'id'>, id?: string) {
      Object.assign(this, props)

      if (!id) {
        this.id = v4()
      }
    }
}
