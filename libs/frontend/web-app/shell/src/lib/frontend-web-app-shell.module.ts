import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FrontendWebAppSharedErrorHandlerModule } from '@last-chance/frontend/web-app/shared/error-handler';
import { FrontendWebAppSharedLoggerModule } from '@last-chance/frontend/web-app/shared/logger';

@NgModule({
  imports: [BrowserModule, FrontendWebAppSharedLoggerModule, FrontendWebAppSharedErrorHandlerModule],
})
export class FrontendWebAppShellModule {}
