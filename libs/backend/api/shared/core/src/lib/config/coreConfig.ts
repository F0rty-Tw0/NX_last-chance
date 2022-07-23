type CoreConfigType = {
  environment?: string;
  port: number;
};

declare const process: {
  env: {
    NODE_ENV: string;
    PORT: string;
  };
};

export const coreConfig = (): CoreConfigType => ({
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.PORT || '3000', 10),
});
