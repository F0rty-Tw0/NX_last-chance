import { ILoggerContext } from './logger-context.interface';

export interface ILogger {
  debug<T>(message: string, context?: ILoggerContext<T>): void;
  info<T>(message: string, context?: ILoggerContext<T>): void;
  warn<T>(message: string, context?: ILoggerContext<T>): void;
  error<T>(message: string, context?: ILoggerContext<T>): void;
}
