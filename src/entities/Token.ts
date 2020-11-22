export class Token {
  public email: string;
  public token: string;

  constructor (props: Token) {
    Object.assign(this, props)
  }
}
