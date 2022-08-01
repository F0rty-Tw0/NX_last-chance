// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { GeoLocationApiFacade } from '@last-chance/backend/api/geo-location/data-access';
import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';

@Controller('dummy')
export class DummyController {
  public constructor(private readonly geoLocationApiFacade: GeoLocationApiFacade) {}
  // eslint-disable-next-line class-methods-use-this

  @Get()
  public findAll$(): Observable<any> {
    return this.geoLocationApiFacade.getGeoLocation$();
  }
}
