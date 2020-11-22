import { Place } from '@entities/Place'
import { PlaceList } from '@entities/PlaceList'

export interface IPlacesRepository {
    list(page: number): Promise<PlaceList>;
    findById(id: string): Promise<any>
    create(place: Place): Promise<void>;
    // update(place: Place): Promise<void>;
    // delete(place: Place): Promise<void>;
}
