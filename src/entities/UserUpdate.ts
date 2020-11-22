export class UserUpdate {
    public id: string;
    public name?: string;
    public email?: string;
    // public password?: string;
    public emailConfirmation?: boolean;
    public twoFactorConfirmation?: boolean;
    public username?: string;
    public document?: string;
    public documentType?: string;

    constructor (props: UserUpdate) {
      Object.assign(this, props)
    }
}
