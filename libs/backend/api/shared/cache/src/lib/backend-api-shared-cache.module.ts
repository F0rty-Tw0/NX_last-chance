import { Module, CacheModule, CacheInterceptor, CacheModuleOptions } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';

import redisConfig from './configs/redis.config';
import { REDIS_CONFIG_TOKEN } from './configs/redis.token';

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule.forFeature(redisConfig)],
      useFactory: async (configService: ConfigService) => configService.get<CacheModuleOptions>(REDIS_CONFIG_TOKEN),
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
