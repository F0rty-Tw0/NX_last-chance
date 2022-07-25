import { TelegramParseModes } from './telegram-parse-modes.enum';

export interface ITelegramMessagePayload {
  chat_id: string;
  text: string;
  parse_mode?: TelegramParseModes;
}
