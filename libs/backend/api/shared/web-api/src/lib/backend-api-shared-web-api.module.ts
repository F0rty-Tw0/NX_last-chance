import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';

import { WebApiFacade } from './application/web-api.facade';
import { WebApiService } from './infrastructure/web-api.service';

@Module({})
export class BackendApiSharedWebApiModule {
  public static registerAsync(options: {
    imports?: any[];
    useFactory?: (...args: any[]) => AxiosRequestConfig;
    inject?: any[];
  }): DynamicModule {
    return {
      module: BackendApiSharedWebApiModule,
      imports: [
        HttpModule.registerAsync({
          ...options,
        }),
      ],
      providers: [WebApiFacade, WebApiService],
      exports: [WebApiFacade, WebApiService],
    };
  }
}
