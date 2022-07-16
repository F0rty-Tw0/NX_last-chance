import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { BackendApiSharedLoggerModule } from '@last-chance/backend/api/shared/logger';

import { configuration } from './config/configuration';
import { validationSchema } from './config/validations';

@Module({
  imports: [
    BackendApiSharedLoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
  ],
})
export class BackendApiCoreModule {}
