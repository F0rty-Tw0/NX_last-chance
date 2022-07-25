import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IHttpOptions } from '../entities/http-options.interface';
import { WebApiService } from '../infrastructure/web-api.service';

import { IWebApi } from '../entities/web-api.interface';

@Injectable({ providedIn: 'root' })
export class WebApiFacade implements IWebApi {
  constructor(private readonly webApiService: WebApiService) {}

  get$<T>(url: string, options?: IHttpOptions): Observable<T> {
    return this.webApiService.get$(url, options);
  }

  getLazy$<T>(url: string, options?: IHttpOptions): Observable<T> {
    return this.webApiService.getLazy$(url, options);
  }

  post$<T>(url: string, body?: T, options?: IHttpOptions): Observable<T> {
    return this.webApiService.post$(url, body, options);
  }

  postLazy$<T>(url: string, body?: T, options?: IHttpOptions): Observable<T> {
    return this.webApiService.postLazy$(url, body, options);
  }

  put$<T>(url: string, body?: T, options?: IHttpOptions): Observable<T> {
    return this.webApiService.put$(url, body, options);
  }

  putLazy$<T>(url: string, body?: T, options?: IHttpOptions): Observable<T> {
    return this.webApiService.putLazy$(url, body, options);
  }
}
