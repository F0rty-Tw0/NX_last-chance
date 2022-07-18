import { Module } from '@nestjs/common';

import { BackendApiSharedCoreModule } from '@last-chance/backend/api/shared/core';

@Module({
  imports: [BackendApiSharedCoreModule],
})
export class AppModule {}
