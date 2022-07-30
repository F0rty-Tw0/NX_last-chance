import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { BackendApiSharedWebApiModule } from '@last-chance/backend/api/shared/web-api';

import { GeoLocationApiService } from './infrastructure/geo-location-api.service';
import { GeoLocationApiFacade } from './application/geo-location-api.facade';

import geoLocationConfig, { GeoLocationConfigType } from './configs/geo-location.config';
import { GEO_LOCATION_CONFIG_TOKEN } from './configs/geo-location.token';

@Module({
  imports: [
    BackendApiSharedWebApiModule.registerAsync({
      imports: [ConfigModule.forFeature(geoLocationConfig)],
      useFactory: (configService: ConfigService) => ({
        ...configService.get<GeoLocationConfigType>(GEO_LOCATION_CONFIG_TOKEN)?.requestOptions,
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forFeature(geoLocationConfig),
  ],
  providers: [GeoLocationApiService, GeoLocationApiFacade],
  exports: [GeoLocationApiFacade],
})
export class BackendApiGeoLocationDataAccessModule {}
