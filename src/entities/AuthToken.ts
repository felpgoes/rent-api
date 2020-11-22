import moment from 'moment'
import { v4 } from 'uuid'

export class AuthToken {
  private readonly id: string

  public email: string;
  public token: string;
  public expires: moment.Moment;

  constructor (props: Omit<AuthToken, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
