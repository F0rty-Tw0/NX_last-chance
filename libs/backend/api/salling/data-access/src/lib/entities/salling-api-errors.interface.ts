export interface ISallingRequestError extends ISallingError {
  developerMessage: string;
}

export interface ISallingError {
  code: string;
  statusCode: number;
}

export interface ISallingServerError {
  errorCode: number;
  developerMessage: string;
  userMessage: string;
  moreInfo: string;
}
