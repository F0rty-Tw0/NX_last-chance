import { Injectable } from '@nestjs/common';

import { TelegramBotNotificationService } from '../infrastructure/telegram-bot-notification.service';

import { ITelegramBotNotification } from '../entities/bridges/telegram-bot-notification.interface';

@Injectable()
export class TelegramBotNotificationFacade implements ITelegramBotNotification {
  public constructor(private readonly telegramBotNotificationService: TelegramBotNotificationService) {}

  public sendNotification(message: string): void {
    this.telegramBotNotificationService.sendNotification(message);
  }
}
