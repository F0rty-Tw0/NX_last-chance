import { HttpHeaders, HttpContext, HttpParams } from '@angular/common/http';

export interface IHttpOptions {
  headers?: HttpHeaders | IHttpHeader;
  observe?: 'body';
  context?: HttpContext;
  params?: HttpParams | IHttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

interface IHttpHeader {
  [header: string]: string | string[];
}

interface IHttpParams {
  [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
}
