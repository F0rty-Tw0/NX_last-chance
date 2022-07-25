import { Module, CacheModule, CacheInterceptor } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';

import * as redisStore from 'cache-manager-redis-store';

import cacheEnvConfig, { CacheEnvConfigType } from './configs/cacheEnvConfig';

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule.forFeature(cacheEnvConfig)],
      useFactory: async (configService: ConfigService<CacheEnvConfigType>) => ({
        store: redisStore,
        host: configService.get<string>('REDIS_ENDPOINT'),
        port: configService.get<number>('REDIS_PORT'),
        password: configService.get<string>('REDIS_PASSWORD'),
        tll: configService.get<number>('REDIS_TTL'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class BackendApiSharedCacheModule {}
