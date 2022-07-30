import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { SallingApiService } from '../infrastructure/salling-api.service';

import { ISallingFoodWaste } from '../entities/salling-api-response.interface';
import { ISallingApi } from '../entities/salling-api.interface';
import { IGeoCoordinates } from '../entities/salling-store/salling-store.entity';

@Injectable()
export class SallingApiFacade implements ISallingApi {
  public constructor(private readonly sallingApiService: SallingApiService) {}

  public getSallingFoodWasteByZip$(zip: string, radius?: number | undefined): Observable<ISallingFoodWaste[]> {
    return this.sallingApiService.getSallingFoodWasteByZip$(zip, radius);
  }

  public getSallingFoodWasteByGeo$(geo: IGeoCoordinates, radius?: number | undefined): Observable<ISallingFoodWaste[]> {
    return this.sallingApiService.getSallingFoodWasteByGeo$(geo, radius);
  }

  public getSallingFoodWasteById$(id: string): Observable<ISallingFoodWaste> {
    return this.sallingApiService.getSallingFoodWasteById$(id);
  }
}
