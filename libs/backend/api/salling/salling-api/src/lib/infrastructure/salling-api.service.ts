import { WebApiFacade } from '@last-chance/backend/api/shared/web-api';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SallingConfigType } from '../configs/salling.config';
import { SALLING_GROUP_CONFIG_TOKEN } from '../configs/salling.token';
import {
  ISallingApiGeoParams,
  ISallingApiZipParams,
  SallingApiParamsType,
} from '../entities/salling-api-params.interface';

import { ISallingFoodWaste } from '../entities/salling-api-response.interface';
import { IGeoCoordinates } from '../entities/salling-store/salling-store.entity';

@Injectable()
export class SallingApiService {
  public constructor(private readonly configService: ConfigService, private readonly webApiFacade: WebApiFacade) {}

  private readonly foodWasteUrl =
    this.configService.get<SallingConfigType>(SALLING_GROUP_CONFIG_TOKEN)?.sallingLinks.foodWaste || '';

  public getSallingFoodWasteByZip$(zip: string, radius?: number): Observable<ISallingFoodWaste[]> {
    const params: ISallingApiZipParams = {
      zip,
      radius: radius || 5,
    };

    return this.getSallingFoodWaste$(params);
  }

  public getSallingFoodWasteByGeo$(geo: IGeoCoordinates, radius?: number): Observable<ISallingFoodWaste[]> {
    const params: ISallingApiGeoParams = {
      geo: `${geo.lat},${geo.lng}`,
      radius: radius || 5,
    };

    return this.getSallingFoodWaste$(params);
  }

  public getSallingFoodWasteById$(id: string): Observable<ISallingFoodWaste> {
    return this.webApiFacade
      .get$<ISallingFoodWaste>(`${this.foodWasteUrl}/${id}`)
      .pipe(map((response) => response.data));
  }

  private getSallingFoodWaste$(params: SallingApiParamsType): Observable<ISallingFoodWaste[]> {
    return this.webApiFacade
      .get$<ISallingFoodWaste[]>(this.foodWasteUrl, { params })
      .pipe(map((response) => response.data));
  }
}
