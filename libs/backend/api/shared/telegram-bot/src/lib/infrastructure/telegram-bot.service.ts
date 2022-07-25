import { Injectable } from '@nestjs/common';

import { TelegramBotWebApiFacade } from '../application/telegram-bot-web-api.facade';

import { ITelegramMessagePayload } from '../entities/telegram-message-payload.interface';
import { TelegramParseModes } from '../entities/telegram-parse-modes.enum';

@Injectable()
export class TelegramBotService {
  public constructor(private readonly telegramBotWebApiFacade: TelegramBotWebApiFacade) {}

  public sendMessage(chatId: string, message: string, parseMode?: TelegramParseModes): void {
    const messageData: ITelegramMessagePayload = {
      chat_id: chatId,
      text: message,
      parse_mode: parseMode,
    };

    this.telegramBotWebApiFacade.request('sendMessage', messageData);
  }
}
