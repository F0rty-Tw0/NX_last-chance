import { registerAs } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';

import { GEO_LOCATION_CONFIG_TOKEN } from './geo-location.token';

declare const process: {
  env: {
    GEO_LOCATION_API_URL: string;
    GEO_LOCATION_API_TOKEN: string;
  };
};

export type GeoLocationConfigType = {
  requestOptions: AxiosRequestConfig;
};

export default registerAs(
  GEO_LOCATION_CONFIG_TOKEN,
  (): GeoLocationConfigType => ({
    requestOptions: {
      baseURL: process.env.GEO_LOCATION_API_URL || '',
      headers: {
        Authorization: `ApiKey ${process.env.GEO_LOCATION_API_TOKEN || ''}`,
      },
      params: {
        output: 'json',
        pretty: true,
        fields: 'location,country,ip',
      },
      timeout: 10_000,
      maxRedirects: 5,
    },
  }),
);
