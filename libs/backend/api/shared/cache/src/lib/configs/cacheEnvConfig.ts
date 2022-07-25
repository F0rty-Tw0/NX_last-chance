import { registerAs } from '@nestjs/config';

declare const process: {
  env: {
    REDIS_ENDPOINT: string;
    REDIS_PORT: string;
    REDIS_PASSWORD: string;
    REDIS_TTL: string;
  };
};

export type CacheEnvConfigType = {
  REDIS_ENDPOINT: string;
  REDIS_PASSWORD: string;
  REDIS_PORT: number;
  REDIS_TTL: number;
};

export default registerAs(
  'cache-env-config',
  (): CacheEnvConfigType => ({
    REDIS_ENDPOINT: process.env.REDIS_ENDPOINT || 'localhost',
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
    REDIS_PORT: parseInt(process.env.REDIS_PORT || '6379', 10),
    REDIS_TTL: parseInt(process.env.REDIS_TTL || '60', 10),
  }),
);
