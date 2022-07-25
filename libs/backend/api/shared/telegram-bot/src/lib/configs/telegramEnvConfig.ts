import { registerAs } from '@nestjs/config';

declare const process: {
  env: {
    NODE_ENV: string;
    TELEGRAM_BOT_API_URL: string;
    TELEGRAM_BOT_API_TOKEN: string;
    TELEGRAM_GROUP_ID: string;
  };
};

export type TelegramEnvConfigType = {
  NODE_ENV: string;
  TELEGRAM_BOT_API_URL: string;
  TELEGRAM_BOT_API_TOKEN: string;
  TELEGRAM_GROUP_ID: string;
};

export default registerAs(
  'telegram-env-config',
  (): TelegramEnvConfigType => ({
    NODE_ENV: process.env.NODE_ENV,
    TELEGRAM_BOT_API_URL: process.env.TELEGRAM_BOT_API_URL,
    TELEGRAM_BOT_API_TOKEN: process.env.TELEGRAM_BOT_API_TOKEN,
    TELEGRAM_GROUP_ID: process.env.TELEGRAM_GROUP_ID,
  }),
);
