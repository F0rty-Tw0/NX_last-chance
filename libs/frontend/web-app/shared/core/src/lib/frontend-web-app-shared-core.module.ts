import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FrontendWebAppSharedLoggerModule } from '@last-chance/frontend/web-app/shared/logger';

@NgModule({
  imports: [BrowserModule, FrontendWebAppSharedLoggerModule],
})
export class FrontendWebAppSharedCoreModule {}
