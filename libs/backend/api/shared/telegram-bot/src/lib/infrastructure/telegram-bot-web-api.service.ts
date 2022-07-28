import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { take } from 'rxjs/operators';

import { WebApiFacade } from '@last-chance/backend/api/shared/web-api';

import { TelegramBotConfigType } from '../configs/telegram-bot.config';
import { TELEGRAM_BOT_CONFIG_TOKEN } from '../configs/telegram-bot.token';

import { ITelegramBotWebApi } from '../entities/bridges/telegram-bot-web-api.interface';
import { ITelegramMessagePayload } from '../entities/telegram-message-payload.interface';

@Injectable()
export class TelegramBotWebApiService implements ITelegramBotWebApi {
  public constructor(private readonly configService: ConfigService, private readonly webApiFacade: WebApiFacade) {}

  private readonly config = this.configService.get<TelegramBotConfigType>(TELEGRAM_BOT_CONFIG_TOKEN);

  private readonly isDev = this.config?.isDev;

  public request(method: string, messageData?: ITelegramMessagePayload): void {
    if (!this.isDev) {
      this.webApiFacade
        .post$<ITelegramMessagePayload>(method, messageData)
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
}
