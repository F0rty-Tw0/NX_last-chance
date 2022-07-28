import { BackendApiSharedWebApiModule } from '@last-chance/backend/api/shared/web-api';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { SallingApiService } from './infrastructure/salling-api.service';

import sallingConfig, { SallingConfigType } from './configs/salling.config';
import { SALLING_GROUP_CONFIG_TOKEN } from './configs/salling.token';

@Module({
  imports: [
    BackendApiSharedWebApiModule.registerAsync({
      imports: [ConfigModule.forFeature(sallingConfig)],
      useFactory: (configService: ConfigService) => ({
        ...configService.get<SallingConfigType>(SALLING_GROUP_CONFIG_TOKEN)?.requestOptions,
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forFeature(sallingConfig),
  ],
  providers: [SallingApiService],
  exports: [SallingApiService],
})
export class BackendApiSallingSallingApiModule {}
