import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { WebApiFacade } from './application/web-api.facade';
import { WebApiService } from './infrastructure/web-api.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [WebApiService, WebApiFacade],
})
export class FrontendWebAppSharedWebApiModule {}
