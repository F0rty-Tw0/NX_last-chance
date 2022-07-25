import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { environment } from '@last-chance/shared/utils';

import { IHttpOptions } from '../entities/http-options.interface';
import { IWebApi } from '../entities/web-api.interface';

@Injectable()
export class WebApiService implements IWebApi {
  public constructor(private readonly httpClient: HttpClient) {}

  private readonly apiUrl = environment.apiUrl;

  public get$<T>(endpoint: string, options?: IHttpOptions): Observable<T> {
    return this.httpClient
      .get<T>(`${this.apiUrl}/${endpoint}`, options)
      .pipe(finalize(() => console.log('loading finished')));
  }

  public getLazy$<T>(endpoint: string, options?: IHttpOptions): Observable<T> {
    return this.httpClient.get<T>(`${this.apiUrl}/${endpoint}`, options);
  }

  public post$<T>(endpoint: string, body?: T, options?: IHttpOptions): Observable<T> {
    return this.httpClient
      .post<T>(`${this.apiUrl}/${endpoint}`, body, options)
      .pipe(finalize(() => console.log('loading finished')));
  }

  public postLazy$<T>(endpoint: string, body?: T, options?: IHttpOptions): Observable<T> {
    return this.httpClient.post<T>(`${this.apiUrl}/${endpoint}`, body, options);
  }

  public put$<T>(endpoint: string, body?: T, options?: IHttpOptions): Observable<T> {
    return this.httpClient
      .put<T>(`${this.apiUrl}/${endpoint}`, body, options)
      .pipe(finalize(() => console.log('loading finished')));
  }

  public putLazy$<T>(endpoint: string, body?: T, options?: IHttpOptions): Observable<T> {
    return this.httpClient.put<T>(`${this.apiUrl}/${endpoint}`, body, options);
  }
}
