import { Logger, ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';

import { CustomHttpExceptionResponse, HttpExceptionResponse } from '../entities/http-exception-response.interface';
import { getErrorResponse } from '../utils/error-response.util';

@Catch(HttpException)
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const context = host.switchToHttp();
    const response = context.getResponse<FastifyReply>();
    const request = context.getRequest<FastifyRequest>();
    let status: HttpStatus;
    let errorMessage: string;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const errorResponse = exception.getResponse();
      errorMessage = (errorResponse as HttpExceptionResponse).message || exception.message;
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      errorMessage = 'Critical internal server Error occurred!';
    }

    const CustomErrorResponse: CustomHttpExceptionResponse = getErrorResponse(status, errorMessage, request);

    this.logger.error(CustomErrorResponse, 'HTTP Exception');
    response.status(status).send(CustomErrorResponse);
  }
}
