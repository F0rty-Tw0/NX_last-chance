import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { BackendApiSharedWebApiModule } from '@last-chance/backend/api/shared/web-api';

import telegramBotConfig, { TelegramBotConfigType } from './configs/telegram-bot.config';

import { TelegramBotService } from './infrastructure/telegram-bot.service';
import { TelegramBotFacade } from './application/telegram-bot.facade';
import { TelegramBotWebApiService } from './infrastructure/telegram-bot-web-api.service';
import { TelegramBotWebApiFacade } from './application/telegram-bot-web-api.facade';
import { TelegramBotNotificationService } from './infrastructure/telegram-bot-notification.service';
import { TelegramBotNotificationFacade } from './application/telegram-bot-notification.facade';
import { TELEGRAM_BOT_CONFIG_TOKEN } from './configs/telegram-bot.token';

@Module({
  imports: [
    BackendApiSharedWebApiModule.registerAsync({
      imports: [ConfigModule.forFeature(telegramBotConfig)],
      useFactory: (configService: ConfigService) => ({
        ...configService.get<TelegramBotConfigType>(TELEGRAM_BOT_CONFIG_TOKEN)?.requestOptions,
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forFeature(telegramBotConfig),
  ],
  providers: [
    TelegramBotService,
    TelegramBotFacade,
    TelegramBotWebApiService,
    TelegramBotWebApiFacade,
    TelegramBotNotificationService,
    TelegramBotNotificationFacade,
  ],
  exports: [TelegramBotNotificationFacade],
})
export class BackendApiSharedTelegramBotModule {}
