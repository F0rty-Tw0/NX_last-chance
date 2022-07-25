import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

import { AllExceptionsFilter } from '../infrastructure/all-exceptions.filter';

@Catch()
export class AllExceptionsFilterFacade implements ExceptionFilter {
  public constructor(private readonly allExceptionsFilter: AllExceptionsFilter) {}

  public catch(exception: unknown, host: ArgumentsHost): void {
    this.allExceptionsFilter.catch(exception, host);
  }
}
