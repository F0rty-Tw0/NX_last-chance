type CoreConfigType = {
  NODE_ENV: string;
  PORT: number;
};

declare const process: {
  env: {
    NODE_ENV: string;
    PORT: string;
  };
};

export const coreConfig = (): CoreConfigType => ({
  NODE_ENV: process.env.NODE_ENV,
  PORT: parseInt(process.env.PORT || '3000', 10),
});
