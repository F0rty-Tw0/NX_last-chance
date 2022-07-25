import { ITelegramMessagePayload } from '../telegram-message-payload.interface';

export interface ITelegramBotWebApi {
  request(method: string, messageData?: ITelegramMessagePayload): void;
}
