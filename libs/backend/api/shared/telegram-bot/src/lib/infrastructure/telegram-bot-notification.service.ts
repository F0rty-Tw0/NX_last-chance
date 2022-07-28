import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { TelegramBotFacade } from '../application/telegram-bot.facade';

import { TelegramBotConfigType } from '../configs/telegram-bot.config';
import { TELEGRAM_BOT_CONFIG_TOKEN } from '../configs/telegram-bot.token';

import { ITelegramBotNotification } from '../entities/bridges/telegram-bot-notification.interface';
import { TelegramParseModes } from '../entities/telegram-parse-modes.enum';

@Injectable()
export class TelegramBotNotificationService implements ITelegramBotNotification {
  public constructor(
    private readonly configService: ConfigService,
    private readonly telegramBotFacade: TelegramBotFacade,
  ) {}

  private readonly groupId =
    this.configService.get<TelegramBotConfigType>(TELEGRAM_BOT_CONFIG_TOKEN)?.notificationGroupId || '';

  public sendNotification(notification: string): void {
    if (this.groupId) {
      this.telegramBotFacade.sendMessage(this.groupId, notification, TelegramParseModes.MarkdownV2);
    }
  }
}
