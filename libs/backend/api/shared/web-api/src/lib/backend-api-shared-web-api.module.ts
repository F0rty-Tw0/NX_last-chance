import { Module } from '@nestjs/common';

import { WebApiFacade } from './application/web-api.facade';
import { WebApiService } from './infrastructure/web-api.service';

@Module({
  providers: [WebApiService, WebApiFacade],
})
export class BackendApiSharedWebApiModule {}
