import { Module } from '@nestjs/common';

import { BackendApiShellModule } from '@last-chance/backend/api/shell';

@Module({
  imports: [BackendApiShellModule],
})
export class AppModule {}
