import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

import { IWebApi } from '../entities/web-api.interface';

@Injectable()
export class WebApiService implements IWebApi {
  public constructor(private readonly httpService: HttpService) {}

  public get$<T>(url: string, options?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return this.httpService.get<T>(url, options);
  }

  public post$<T>(url: string, body?: T, options?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return this.httpService.post<T>(url, body, options);
  }

  public put$<T>(url: string, body?: T, options?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return this.httpService.put<T>(url, body, options);
  }
}
