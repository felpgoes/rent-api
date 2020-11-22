import { Place } from './Place'

export class PlaceList {
    public results: Place[];
    public page: string;
    public resultCount: string;
    public pageCount: string;

    constructor (props: PlaceList) {
      Object.assign(this, props)
    }
}
