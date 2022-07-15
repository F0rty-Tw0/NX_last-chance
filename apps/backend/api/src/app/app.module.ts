import { Module } from '@nestjs/common';

import { BackendApiCoreModule } from '@last-chance/backend/api/core';

@Module({
  imports: [BackendApiCoreModule],
})
export class AppModule {}
