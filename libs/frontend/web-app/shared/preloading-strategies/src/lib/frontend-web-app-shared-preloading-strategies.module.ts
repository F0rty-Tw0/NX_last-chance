import { NgModule } from '@angular/core';

import { CustomPreloadingStrategyFacade } from './application/custom-preloading-strategy.facade';
import { CustomPreloadingStrategyService } from './infrastructure/custom-preloading-strategy.service';

@NgModule({
  providers: [CustomPreloadingStrategyService, CustomPreloadingStrategyFacade],
})
export class FrontendWebAppSharedPreloadingStrategiesModule {}
