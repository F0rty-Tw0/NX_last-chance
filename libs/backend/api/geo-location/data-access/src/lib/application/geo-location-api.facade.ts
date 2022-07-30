import { Injectable } from '@nestjs/common';

import { GeoLocationApiService } from '../infrastructure/geo-location-api.service';

import { IGeoLocationApi } from '../entities/geo-location-api.interface';

@Injectable()
export class GeoLocationApiFacade implements IGeoLocationApi {
  public constructor(private readonly geoLocationApiService: GeoLocationApiService) {}

  public getGeoLocation(ip: string): void {
    return this.geoLocationApiService.getGeoLocation(ip);
  }
}
