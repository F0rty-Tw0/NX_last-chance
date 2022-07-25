import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

export interface IWebApi {
  get$<T>(url: string, options?: AxiosRequestConfig): Observable<AxiosResponse<T>>;
  post$<T>(url: string, body?: T, options?: AxiosRequestConfig): Observable<AxiosResponse<T>>;
  put$<T>(url: string, body?: T, options?: AxiosRequestConfig): Observable<AxiosResponse<T>>;
}
