import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

import { IWebApi } from '../entities/web-api.interface';

@Injectable()
export class WebApiService implements IWebApi {
  constructor(private readonly httpService: HttpService) {}

  get$<T>(url: string, options?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return this.httpService.get<T>(url, options);
  }

  post$<T>(url: string, body?: T, options?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return this.httpService.post<T>(url, body, options);
  }

  put$<T>(url: string, body?: T, options?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return this.httpService.put<T>(url, body, options);
  }
}
