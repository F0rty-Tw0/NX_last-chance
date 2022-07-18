import { Injectable } from '@angular/core';

import { LoggerService } from '../infrastructure/logger.service';

import { ILoggerContext } from '../entities/logger-context.interface';
import { ILogger } from '../entities/logger.interface';

@Injectable({ providedIn: 'root' })
export class LoggerFacade implements ILogger {
  constructor(private loggerService: LoggerService) {}

  public debug<T>(message: string, context?: ILoggerContext<T>): void {
    this.loggerService.debug(message, context);
  }

  public info<T>(message: string, context?: ILoggerContext<T>): void {
    this.loggerService.info(message, context);
  }

  public warn<T>(message: string, context?: ILoggerContext<T>): void {
    this.loggerService.warn(message, context);
  }

  public error<T>(message: string, context?: ILoggerContext<T>): void {
    this.loggerService.error(message, context);
  }
}
