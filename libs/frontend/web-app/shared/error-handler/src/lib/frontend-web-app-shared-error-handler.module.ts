import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FrontendWebAppSharedLoggerModule } from '@last-chance/frontend/web-app/shared/logger';

import { ErrorHandlerService } from './infrastructure/error-handler.service';
import { GlobalErrorHandler } from './infrastructure/global-error-handler.service';
import { ServerErrorInterceptor } from './infrastructure/server-error.interceptor';
import { ErrorHandlerFacade } from './application/error-handler.facade';

@NgModule({
  imports: [HttpClientModule, FrontendWebAppSharedLoggerModule],
  providers: [
    ErrorHandlerService,
    ErrorHandlerFacade,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
  ],
})
export class FrontendWebAppSharedErrorHandlerModule {}
