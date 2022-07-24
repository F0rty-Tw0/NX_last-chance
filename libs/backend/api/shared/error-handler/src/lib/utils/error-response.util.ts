import { HttpStatus } from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { CustomHttpExceptionResponse } from '../entities/http-exception-response.interface';

export const getErrorResponse = (
  status: HttpStatus,
  message: string,
  request: FastifyRequest,
): CustomHttpExceptionResponse => ({
  status,
  message,
  timestamp: new Date().toISOString(),
  path: request.url,
  method: request.method,
});
