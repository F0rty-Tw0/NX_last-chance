import { CacheModuleOptions } from '@nestjs/common';
import { registerAs } from '@nestjs/config';

import * as redisStore from 'cache-manager-redis-store';
import { REDIS_CONFIG_TOKEN } from './redis.token';

declare const process: {
  env: {
    REDIS_ENDPOINT: string;
    REDIS_PORT: string;
    REDIS_PASSWORD: string;
    REDIS_TTL: string;
  };
};

export default registerAs(
  REDIS_CONFIG_TOKEN,
  (): CacheModuleOptions => ({
    store: redisStore,
    host: process.env.REDIS_ENDPOINT || 'localhost',
    password: process.env.REDIS_PASSWORD || '',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
    tll: parseInt(process.env.REDIS_TTL || '60', 10),
  }),
);
