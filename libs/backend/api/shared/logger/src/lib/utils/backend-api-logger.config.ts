import { createWriteStreamSync } from 'pino-datadog';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const printerFactory = require('pino-http-print');

declare const process: {
  env: {
    NODE_ENV: string;
    DATADOG_API_KEY: string;
  };
};

const isDev = process.env.NODE_ENV === 'development';

const datadogStream = createWriteStreamSync({
  apiKey: process.env.DATADOG_API_KEY,
  ddsource: 'Back-End Logger',
  service: isDev ? '(DEV) NEST API' : 'NEST API',
});

const prettyPrint = printerFactory({
  all: true,
  relativeUrl: true,
  translateTime: 'SYS:dd-mm-yyyy HH:MM:ss',
}) as NodeJS.WritableStream;

export const backendLogger = isDev ? prettyPrint : datadogStream;
