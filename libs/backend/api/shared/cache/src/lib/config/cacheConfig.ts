import { registerAs } from '@nestjs/config';

type CacheEnvConfigType = {
  redisEndpoint: string;
  redisPort: number;
  redisPassword: string;
};

declare const process: {
  env: {
    REDIS_ENDPOINT: string;
    REDIS_PORT: string;
    REDIS_PASSWORD: string;
  };
};

export default registerAs(
  'cache-env-config',
  (): CacheEnvConfigType => ({
    redisEndpoint: process.env.REDIS_ENDPOINT || 'localhost',
    redisPort: parseInt(process.env.REDIS_PORT || '6379', 10),
    redisPassword: process.env.REDIS_PASSWORD,
  }),
);
