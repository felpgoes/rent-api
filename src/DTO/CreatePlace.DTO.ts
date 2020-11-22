export interface IAddress {
  street: string,
  number: number,
  complement: string,
  neighborhood: string,
  zipcode:string,
  country: string
}

export interface IPhoto {
  url: string
}

export interface ICreatePlaceDTO {
  name: string;
  owner: string;
  address: IAddress;
  photos: IPhoto[];
  contact: boolean;
  description: string;
}
