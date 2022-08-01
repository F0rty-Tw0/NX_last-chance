import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { GeoLocationApiService } from '../infrastructure/geo-location-api.service';

import { IGeoLocationApi } from '../entities/geo-location-api.interface';
import { IGeoLocation } from '../entities/geo-location.entity';

@Injectable()
export class GeoLocationApiFacade implements IGeoLocationApi {
  public constructor(private readonly geoLocationApiService: GeoLocationApiService) {}

  public getGeoLocation$(): Observable<IGeoLocation> {
    return this.geoLocationApiService.getGeoLocation$();
  }

  public getGeoLocationByIp$(ip: string): Observable<IGeoLocation> {
    return this.geoLocationApiService.getGeoLocationByIp$(ip);
  }
}
