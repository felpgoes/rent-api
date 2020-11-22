import { v4 } from 'uuid'

export interface IAddress {
  street: string,
  number: number,
  complement: string,
  neighborhood: string,
  zipcode:string,
  country: string,
  city: string,
  state: string
}

export interface IPhoto {
  url: string
}

export class Place {
  public readonly id: string;

  public name: string;
  public owner: string;
  public address: IAddress;
  public photos: IPhoto[];
  public contact: string;
  public description: string;

  constructor (props: Omit<Place, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
