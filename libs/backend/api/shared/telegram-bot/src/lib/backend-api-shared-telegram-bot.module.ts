import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { BackendApiSharedWebApiModule } from '@last-chance/backend/api/shared/web-api';

import telegramEnvConfig from './configs/telegramEnvConfig';

import { TelegramBotService } from './infrastructure/telegram-bot.service';
import { TelegramBotFacade } from './application/telegram-bot.facade';
import { TelegramBotWebApiService } from './infrastructure/telegram-bot-web-api.service';
import { TelegramBotWebApiFacade } from './application/telegram-bot-web-api.facade';
import { TelegramBotNotificationService } from './infrastructure/telegram-bot-notification.service';
import { TelegramBotNotificationFacade } from './application/telegram-bot-notification.facade';

@Module({
  imports: [BackendApiSharedWebApiModule, ConfigModule.forFeature(telegramEnvConfig)],
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
