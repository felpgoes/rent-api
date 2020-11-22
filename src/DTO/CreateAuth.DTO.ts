import moment from 'moment'

export interface ICreateAuthDTO {
    email: string;
    token: string;
    expires: moment.Moment
}
