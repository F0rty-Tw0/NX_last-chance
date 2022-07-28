import { registerAs } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { TELEGRAM_BOT_CONFIG_TOKEN } from './telegram-bot.token';

declare const process: {
  env: {
    NODE_ENV: string;
    TELEGRAM_BOT_API_URL: string;
    TELEGRAM_BOT_API_TOKEN: string;
    TELEGRAM_GROUP_ID: string;
  };
};

export type TelegramBotConfigType = {
  requestOptions: AxiosRequestConfig;
  isDev: boolean;
  notificationGroupId: string;
};

export default registerAs(
  TELEGRAM_BOT_CONFIG_TOKEN,
  (): TelegramBotConfigType => ({
    requestOptions: {
      baseURL: `${process.env.TELEGRAM_BOT_API_URL}${process.env.TELEGRAM_BOT_API_TOKEN}` || '',
      timeout: 10_000,
      maxRedirects: 5,
    },
    isDev: process.env.NODE_ENV === 'development',
    notificationGroupId: process.env.TELEGRAM_GROUP_ID || '',
  }),
);
