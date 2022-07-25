import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { LoggerFacade } from '@last-chance/frontend/web-app/shared/logger';

import { ErrorHandlerFacade } from '../application/error-handler.facade';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private readonly injector: Injector) {}

  handleError(error: Error | HttpErrorResponse): void {
    const errorFacade = this.injector.get(ErrorHandlerFacade);
    const loggerFacade = this.injector.get(LoggerFacade);

    const message =
      error instanceof HttpErrorResponse ? errorFacade.getServerMessage(error) : errorFacade.getClientMessage(error);
    const stack =
      error instanceof HttpErrorResponse ? errorFacade.getServerStack(error) : errorFacade.getClientStack(error);

    loggerFacade.error(message, { stack });
  }
}
