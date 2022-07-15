/* eslint-disable @typescript-eslint/dot-notation */
type ConfigurationType = {
  environment?: string;
  port: number;
};

export const configuration = (): ConfigurationType => ({
  environment: process.env['NODE_ENV'],
  port: parseInt(process.env['PORT'] || '3000', 10),
});
