import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { BackendApiSharedLoggerModule } from '@last-chance/backend/api/shared/logger';
import { BackendApiSharedCacheModule } from '@last-chance/backend/api/shared/cache';
import { BackendApiSharedExceptionFiltersModule } from '@last-chance/backend/api/shared/exception-filters';

import { coreEnvConfig } from './configs/coreEnvConfig';
import { coreEnvConfigValidationSchema } from './configs/coreEnvConfigValidations';

import { DummyController } from './dummy.controller';

@Module({
  controllers: [DummyController],
  imports: [
    BackendApiSharedLoggerModule,
    BackendApiSharedCacheModule,
    BackendApiSharedExceptionFiltersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [coreEnvConfig],
      validationSchema: coreEnvConfigValidationSchema,
    }),
  ],
})
export class BackendApiShellModule {}
