import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule, Params } from 'nestjs-pino';
import pinoConfig from './configs/pino.config';

import { PINO_CONFIG_TOKEN } from './configs/pino.token';

@Module({
  imports: [
    LoggerModule.forRootAsync({
      imports: [ConfigModule.forFeature(pinoConfig)],
      useFactory: async (configService: ConfigService) => configService.get<Params>(PINO_CONFIG_TOKEN) || {},
      inject: [ConfigService],
    }),
  ],
})
export class BackendApiSharedLoggerModule {}
