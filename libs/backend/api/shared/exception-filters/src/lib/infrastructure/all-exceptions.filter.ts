import { Logger, ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';

import { TelegramBotNotificationFacade } from '@last-chance/backend/api/shared/telegram-bot';

import { CustomHttpExceptionResponse, HttpExceptionResponse } from '../entities/http-exception-response.interface';
import { getErrorResponse } from '../utils/error-response.util';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  public constructor(private readonly telegramBotNotificationFacade: TelegramBotNotificationFacade) {}

  private readonly logger = new Logger(AllExceptionsFilter.name);

  public catch(exception: unknown, host: ArgumentsHost): void {
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

    const customErrorResponse: CustomHttpExceptionResponse = getErrorResponse(status, errorMessage, request);

    if (exception instanceof Error) {
      const customMessage = `*Error*: ${customErrorResponse.message} status: ${customErrorResponse.status}`;

      this.telegramBotNotificationFacade.sendNotification(customMessage);
      this.logger.error(customErrorResponse, exception.stack);
    }
    response.status(status).send(customErrorResponse);
  }
}
