import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { configuration } from './config/configuration';
import { validationSchema } from './config/validations';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
  ],
})
export class BackendApiCoreModule {}
