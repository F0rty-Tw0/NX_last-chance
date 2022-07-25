import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilterFacade } from './application/all-exceptions-filter.facade';
import { AllExceptionsFilter } from './infrastructure/all-exceptions.filter';

@Module({
  providers: [AllExceptionsFilter, { provide: APP_FILTER, useClass: AllExceptionsFilterFacade }],
})
export class BackendApiSharedExceptionFiltersModule {}
