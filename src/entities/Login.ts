export class Login {
    public email: string;
    public password: string;

    constructor (props: Login) {
      Object.assign(this, props)
    }
}
