import { TelegramParseModes } from '../telegram-parse-modes.enum';

export interface ITelegramBot {
  sendMessage(chatId: string, message: string, parseMode?: TelegramParseModes): void;
}
