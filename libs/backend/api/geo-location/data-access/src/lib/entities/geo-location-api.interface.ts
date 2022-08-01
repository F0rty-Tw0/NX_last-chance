import { Observable } from 'rxjs';

import { IGeoLocation } from './geo-location.entity';

export interface IGeoLocationApi {
  getGeoLocation$(): Observable<IGeoLocation>;

  getGeoLocationByIp$(ip: string): Observable<IGeoLocation>;
}
