import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { take } from 'rxjs/operators';

import { WebApiFacade } from '@last-chance/backend/api/shared/web-api';

import { TelegramEnvConfigType } from '../configs/telegramEnvConfig';

import { ITelegramMessagePayload } from '../entities/telegram-message-payload.interface';
import { ITelegramBotWebApi } from '../entities/bridges/telegram-bot-web-api.interface';

@Injectable()
export class TelegramBotWebApiService implements ITelegramBotWebApi {
  public constructor(
    private readonly configService: ConfigService<TelegramEnvConfigType>,
    private readonly webApiFacade: WebApiFacade,
  ) {}

  private readonly telegramBotApiToken = this.configService.get<string>('TELEGRAM_BOT_API_TOKEN');

  private readonly telegramBotApiUrl = `https://api.telegram.org/bot${this.telegramBotApiToken}`;

  public request(method: string, messageData?: ITelegramMessagePayload): void {
    this.webApiFacade
      .post$<ITelegramMessagePayload>(`${this.telegramBotApiUrl}/${method}`, messageData)
      .pipe(take(1))
      // eslint-disable-next-line rxjs/no-ignored-subscription
      .subscribe({
        error: (error: unknown) => {
          // TODO: HANDLE ERRORS
          console.error(error);
        },
      });
  }
}
