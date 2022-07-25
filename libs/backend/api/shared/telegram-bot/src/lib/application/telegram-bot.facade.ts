import { Injectable } from '@nestjs/common';

import { TelegramBotService } from '../infrastructure/telegram-bot.service';

import { ITelegramBot } from '../entities/bridges/telegram-bot.interface';
import { TelegramParseModes } from '../entities/telegram-parse-modes.enum';

@Injectable()
export class TelegramBotFacade implements ITelegramBot {
  public constructor(private readonly telegramBotService: TelegramBotService) {}

  public sendMessage(chatId: string, message: string, parseMode?: TelegramParseModes): void {
    this.telegramBotService.sendMessage(chatId, message, parseMode);
  }
}
