import { HttpErrorResponse } from '@angular/common/http';

export interface IErrorHandler {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getClientMessage(error: any): string;
  getClientStack(error: Error): string | undefined;
  getServerMessage(error: HttpErrorResponse): string;
  getServerStack(error: HttpErrorResponse): string;
}
