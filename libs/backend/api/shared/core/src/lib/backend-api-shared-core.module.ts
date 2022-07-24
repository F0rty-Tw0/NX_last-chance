import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { BackendApiSharedLoggerModule } from '@last-chance/backend/api/shared/logger';
import { BackendApiSharedCacheModule } from '@last-chance/backend/api/shared/cache';
import { BackendApiSharedErrorHandlerModule } from '@last-chance/backend/api/shared/error-handler';

import { coreConfig } from './config/coreConfig';
import { coreConfigValidationSchema } from './config/coreConfigValidations';

@Module({
  imports: [
    BackendApiSharedLoggerModule,
    BackendApiSharedCacheModule,
    BackendApiSharedErrorHandlerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [coreConfig],
      validationSchema: coreConfigValidationSchema,
    }),
  ],
})
export class BackendApiSharedCoreModule {}
