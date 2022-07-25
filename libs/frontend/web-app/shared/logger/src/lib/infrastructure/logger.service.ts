/* eslint-disable no-console */
import { Injectable } from '@angular/core';
import { datadogLogs } from '@datadog/browser-logs';

import { environment } from '@last-chance/shared/utils';

import { ILogger } from '../entities/logger.interface';
import { ILoggerContext } from '../entities/logger-context.interface';

@Injectable()
export class LoggerService implements ILogger {
  public constructor() {
    if (environment?.datadog.clientToken && environment?.production) {
      datadogLogs.init({
        clientToken: environment.datadog.clientToken,
        site: environment.datadog.site,
        service: environment.datadog.service,
        forwardErrorsToLogs: true,
        sampleRate: 100,
      });
      this.initialized = true;
    }
  }

  private initialized = false;

  public debug<T>(message: string, context?: ILoggerContext<T>): void {
    if (this.initialized) {
      datadogLogs.logger.debug(message, context);
    } else {
      console.log(message, context);
    }
  }

  public info<T>(message: string, context?: ILoggerContext<T>): void {
    if (this.initialized) {
      datadogLogs.logger.info(message, context);
    } else {
      console.log(message, context);
    }
  }

  public warn<T>(message: string, context?: ILoggerContext<T>): void {
    if (this.initialized) {
      datadogLogs.logger.warn(message, context);
    } else {
      console.warn(message, context);
    }
  }

  public error<T>(message: string, context?: ILoggerContext<T>): void {
    if (this.initialized) {
      datadogLogs.logger.error(message, context);
    } else {
      console.error(message, context);
    }
  }
}
