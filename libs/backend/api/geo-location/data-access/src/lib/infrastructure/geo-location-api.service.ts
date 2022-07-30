import { Injectable } from '@nestjs/common';

import { WebApiFacade } from '@last-chance/backend/api/shared/web-api';

import { IGeoLocationApi } from '../entities/geo-location-api.interface';

@Injectable()
export class GeoLocationApiService implements IGeoLocationApi {
  public constructor(private readonly webApiFacade: WebApiFacade) {}

  public getGeoLocation(ip: string): void {
    this.webApiFacade.get$<string>(ip);
  }
}
