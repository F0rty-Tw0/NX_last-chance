import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ErrorHandlerService } from '../infrastructure/error-handler.service';

import { IErrorHandler } from '../entities/error-handler.interface';

@Injectable({ providedIn: 'root' })
export class ErrorHandlerFacade implements IErrorHandler {
  constructor(private readonly errorHandlerService: ErrorHandlerService) {}

  getClientMessage(error: unknown): string {
    return this.errorHandlerService.getClientMessage(error);
  }

  getClientStack(error: Error): string | undefined {
    return this.errorHandlerService.getClientStack(error);
  }

  getServerMessage(error: HttpErrorResponse): string {
    return this.errorHandlerService.getServerMessage(error);
  }

  getServerStack(error: HttpErrorResponse): string {
    return this.errorHandlerService.getServerStack(error);
  }
}
