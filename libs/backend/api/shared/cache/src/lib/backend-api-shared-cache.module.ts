import { Module, CacheModule, CacheInterceptor } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';

import * as redisStore from 'cache-manager-redis-store';

import cacheConfig, { CacheEnvConfigType } from './config/cacheConfig';

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule.forFeature(cacheConfig)],
      useFactory: async (configService: ConfigService<CacheEnvConfigType>) => ({
        store: redisStore,
        host: configService.get('REDIS_ENDPOINT'),
        port: configService.get('REDIS_PORT'),
        password: configService.get('REDIS_PASSWORD'),
        tll: configService.get('REDIS_TTL'),
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
