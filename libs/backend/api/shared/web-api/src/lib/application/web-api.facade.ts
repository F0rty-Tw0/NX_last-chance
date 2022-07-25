import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

import { WebApiService } from '../infrastructure/web-api.service';

@Injectable()
export class WebApiFacade {
  constructor(private readonly webApiService: WebApiService) {}

  get$<T>(url: string, options?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return this.webApiService.get$(url, options);
  }

  post$<T>(url: string, body?: T, options?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return this.webApiService.post$(url, body, options);
  }

  put$<T>(url: string, body?: T, options?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return this.webApiService.put$(url, body, options);
  }
}
