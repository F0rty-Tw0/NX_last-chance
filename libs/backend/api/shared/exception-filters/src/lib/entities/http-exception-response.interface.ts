export interface HttpExceptionResponse {
  status: number;
  message: string;
}

export interface CustomHttpExceptionResponse extends HttpExceptionResponse {
  path: string;
  method: string;
  timeStamp: string;
}
