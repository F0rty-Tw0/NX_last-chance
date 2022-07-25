import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { WebApiFacade } from './application/web-api.facade';
import { WebApiService } from './infrastructure/web-api.service';

@Module({
  imports: [HttpModule],
  providers: [WebApiService, WebApiFacade],
  exports: [WebApiFacade],
})
export class BackendApiSharedWebApiModule {}
