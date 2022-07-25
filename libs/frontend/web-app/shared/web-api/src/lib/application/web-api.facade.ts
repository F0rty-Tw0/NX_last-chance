import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IHttpOptions } from '../entities/http-options.interface';
import { WebApiService } from '../infrastructure/web-api.service';

import { IWebApi } from '../entities/web-api.interface';

@Injectable({ providedIn: 'root' })
export class WebApiFacade implements IWebApi {
  public constructor(private readonly webApiService: WebApiService) {}

  public get$<T>(url: string, options?: IHttpOptions): Observable<T> {
    return this.webApiService.get$(url, options);
  }

  public getLazy$<T>(url: string, options?: IHttpOptions): Observable<T> {
    return this.webApiService.getLazy$(url, options);
  }

  public post$<T>(url: string, body?: T, options?: IHttpOptions): Observable<T> {
    return this.webApiService.post$(url, body, options);
  }

  public postLazy$<T>(url: string, body?: T, options?: IHttpOptions): Observable<T> {
    return this.webApiService.postLazy$(url, body, options);
  }

  public put$<T>(url: string, body?: T, options?: IHttpOptions): Observable<T> {
    return this.webApiService.put$(url, body, options);
  }

  public putLazy$<T>(url: string, body?: T, options?: IHttpOptions): Observable<T> {
    return this.webApiService.putLazy$(url, body, options);
  }
}
