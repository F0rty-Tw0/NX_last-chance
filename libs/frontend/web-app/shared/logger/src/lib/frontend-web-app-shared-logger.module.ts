import { NgModule } from '@angular/core';

import { LoggerFacade } from './application/logger.facade';
import { LoggerService } from './infrastructure/logger.service';

@NgModule({
  providers: [LoggerService, LoggerFacade],
})
export class FrontendWebAppSharedLoggerModule {}
