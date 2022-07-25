import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { BackendApiSharedTelegramBotModule } from '@last-chance/backend/api/shared/telegram-bot';

import { AllExceptionsFilterFacade } from './application/all-exceptions-filter.facade';
import { AllExceptionsFilter } from './infrastructure/all-exceptions.filter';

@Module({
  imports: [BackendApiSharedTelegramBotModule],
  providers: [AllExceptionsFilter, { provide: APP_FILTER, useClass: AllExceptionsFilterFacade }],
})
export class BackendApiSharedExceptionFiltersModule {}
