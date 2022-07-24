import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';

import { backendLogger } from './utils/backend-api-logger.config';

@Module({
  imports: [
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        pinoHttp: [
          {
            name: 'Backend Api',
            level: configService.get('NODE_ENV') === 'development' ? 'info' : 'debug',
          },
          backendLogger,
        ],
      }),
      inject: [ConfigService],
    }),
  ],
})
export class BackendApiSharedLoggerModule {}
