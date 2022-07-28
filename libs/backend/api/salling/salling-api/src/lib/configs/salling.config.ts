import { registerAs } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';

import { SALLING_GROUP_CONFIG_TOKEN } from './salling.token';

declare const process: {
  env: {
    SALLING_GROUP_API_URL: string;
    SALLING_GROUP_API_TOKEN: string;
    SALLING_GROUP_FOOD_WASTE_URL: string;
    SALLING_GROUP_STORES_URL: string;
  };
};

export type SallingConfigType = {
  requestOptions: AxiosRequestConfig;
  sallingLinks: {
    foodWaste: string;
    stores: string;
  };
};

export default registerAs(
  SALLING_GROUP_CONFIG_TOKEN,
  (): SallingConfigType => ({
    requestOptions: {
      baseURL: process.env.SALLING_GROUP_API_URL || '',
      headers: {
        Authorization: `Bearer ${process.env.SALLING_GROUP_API_TOKEN || ''}`,
      },
      timeout: 10_000,
      maxRedirects: 5,
    },
    sallingLinks: {
      foodWaste: process.env.SALLING_GROUP_FOOD_WASTE_URL || '',
      stores: process.env.SALLING_GROUP_STORES_URL || '',
    },
  }),
);
