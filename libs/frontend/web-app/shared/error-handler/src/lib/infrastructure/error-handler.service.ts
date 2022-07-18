/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { IErrorHandler } from '../entities/error-handler.interface';

@Injectable()
export class ErrorHandlerService implements IErrorHandler {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getClientMessage(error: any): string {
    if (!navigator.onLine) {
      return 'No Internet Connection';
    }
    if (error?.promise && error?.rejection) {
      return error.rejection;
    }

    return error.message ? error.message : error.toString();
  }

  getClientStack(error: Error): string | undefined {
    return error.stack;
  }

  getServerMessage(error: HttpErrorResponse): string {
    return error.message;
  }

  getServerStack(error: HttpErrorResponse): string {
    return error.statusText;
  }
}
