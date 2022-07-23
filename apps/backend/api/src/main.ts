import { Logger, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { Logger as PinoLogger } from 'nestjs-pino';

import { AppModule } from './app/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  const configService = app.get(ConfigService);
  const port = configService.get('PORT') || 3333;
  const logger = new Logger('Backend Api');

  app.enableCors();

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useLogger(app.get(PinoLogger));

  await app.listen(port);
  logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
  logger.log(`🚀 Running in ${configService.get('environment')} mode`);
}

bootstrap();
