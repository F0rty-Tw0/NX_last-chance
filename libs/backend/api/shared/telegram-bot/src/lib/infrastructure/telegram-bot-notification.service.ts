import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { TelegramBotFacade } from '../application/telegram-bot.facade';

import { TelegramEnvConfigType } from '../configs/telegramEnvConfig';
import { ITelegramBotNotification } from '../entities/bridges/telegram-bot-notification.interface';
import { TelegramParseModes } from '../entities/telegram-parse-modes.enum';

@Injectable()
export class TelegramBotNotificationService implements ITelegramBotNotification {
  public constructor(
    private readonly configService: ConfigService<TelegramEnvConfigType>,
    private readonly telegramBotFacade: TelegramBotFacade,
  ) {}

  private readonly chatId = this.configService.get<string>('TELEGRAM_GROUP_ID');

  public sendNotification(notification: string): void {
    if (this.chatId) {
      this.telegramBotFacade.sendMessage(this.chatId, notification, TelegramParseModes.MarkdownV2);
    }
  }
}
