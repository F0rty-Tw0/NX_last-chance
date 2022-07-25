import { Observable } from 'rxjs';

import { IHttpOptions } from './http-options.interface';

export interface IWebApi {
  get$<T>(url: string, options?: IHttpOptions): Observable<T>;

  getLazy$<T>(url: string, options?: IHttpOptions): Observable<T>;

  post$<T>(url: string, body?: T, options?: IHttpOptions): Observable<T>;

  postLazy$<T>(url: string, body?: T, options?: IHttpOptions): Observable<T>;

  put$<T>(url: string, body?: T, options?: IHttpOptions): Observable<T>;

  putLazy$<T>(url: string, body?: T, options?: IHttpOptions): Observable<T>;
}
