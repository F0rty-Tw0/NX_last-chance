import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { BackendApiSharedLoggerModule } from '@last-chance/backend/api/shared/logger';
import { BackendApiSharedCacheModule } from '@last-chance/backend/api/shared/cache';
import { BackendApiSharedExceptionFiltersModule } from '@last-chance/backend/api/shared/exception-filters';

import { coreConfig } from './config/coreConfig';
import { coreConfigValidationSchema } from './config/coreConfigValidations';

@Module({
  imports: [
    BackendApiSharedLoggerModule,
    BackendApiSharedCacheModule,
    BackendApiSharedExceptionFiltersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [coreConfig],
      validationSchema: coreConfigValidationSchema,
    }),
  ],
})
export class BackendApiSharedCoreModule {}
