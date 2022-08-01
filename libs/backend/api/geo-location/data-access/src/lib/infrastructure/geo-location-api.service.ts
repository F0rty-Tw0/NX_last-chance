import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { WebApiFacade } from '@last-chance/backend/api/shared/web-api';

import { IGeoLocationApi } from '../entities/geo-location-api.interface';
import { IGeoLocation } from '../entities/geo-location.entity';

@Injectable()
export class GeoLocationApiService implements IGeoLocationApi {
  public constructor(private readonly webApiFacade: WebApiFacade) {}

  public getGeoLocation$(): Observable<IGeoLocation> {
    return this.webApiFacade.get$<IGeoLocation>('').pipe(map((response) => response.data));
  }

  public getGeoLocationByIp$(ip: string): Observable<IGeoLocation> {
    return this.webApiFacade.get$<IGeoLocation>(ip).pipe(map((response) => response.data));
  }
}
