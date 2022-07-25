import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

import { WebApiService } from '../infrastructure/web-api.service';

@Injectable()
export class WebApiFacade {
  public constructor(private readonly webApiService: WebApiService) {}

  public get$<T>(url: string, options?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return this.webApiService.get$(url, options);
  }

  public post$<T>(url: string, body?: T, options?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return this.webApiService.post$(url, body, options);
  }

  public put$<T>(url: string, body?: T, options?: AxiosRequestConfig): Observable<AxiosResponse<T>> {
    return this.webApiService.put$(url, body, options);
  }
}
