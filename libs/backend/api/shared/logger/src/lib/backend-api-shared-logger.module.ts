import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';

import { loggerConfig } from './utils/backend-api-logger.config';

declare const process: {
  env: {
    NODE_ENV: string;
  };
};

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: [
        {
          name: 'Backend Api',
          level: process.env.NODE_ENV === 'development' ? 'info' : 'debug',
        },
        loggerConfig,
      ],
    }),
  ],
})
export class BackendApiSharedLoggerModule {}
