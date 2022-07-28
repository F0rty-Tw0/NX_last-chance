declare const process: {
  env: {
    NODE_ENV: string;
    PORT: string;
  };
};

type CoreEnvConfigType = {
  NODE_ENV: string;
  PORT: number;
};

export const coreEnvConfig = (): CoreEnvConfigType => ({
  NODE_ENV: process.env.NODE_ENV,
  PORT: parseInt(process.env.PORT || '3000', 10),
});
