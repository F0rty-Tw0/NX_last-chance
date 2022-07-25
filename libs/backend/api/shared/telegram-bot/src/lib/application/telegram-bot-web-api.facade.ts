import { Injectable } from '@nestjs/common';

import { TelegramBotWebApiService } from '../infrastructure/telegram-bot-web-api.service';

import { ITelegramBotWebApi } from '../entities/bridges/telegram-bot-web-api.interface';
import { ITelegramMessagePayload } from '../entities/telegram-message-payload.interface';

@Injectable()
export class TelegramBotWebApiFacade implements ITelegramBotWebApi {
  public constructor(private readonly telegramBotWebApiService: TelegramBotWebApiService) {}

  public request(method: string, messageData?: ITelegramMessagePayload): void {
    this.telegramBotWebApiService.request(method, messageData);
  }
}
