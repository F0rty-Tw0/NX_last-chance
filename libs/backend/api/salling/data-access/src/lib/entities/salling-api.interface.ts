import { Observable } from 'rxjs';

import { ISallingFoodWaste } from './salling-api-response.interface';
import { IGeoCoordinates } from './salling-store/salling-store.entity';

export interface ISallingApi {
  getSallingFoodWasteByZip$(zip: string, radius?: number): Observable<ISallingFoodWaste[]>;
  getSallingFoodWasteByGeo$(geo: IGeoCoordinates, radius?: number): Observable<ISallingFoodWaste[]>;
  getSallingFoodWasteById$(id: string): Observable<ISallingFoodWaste>;
}
