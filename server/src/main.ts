import { Logger as NestLogger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './main.module';

async function bootstrap(): Promise<string> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  });

  app.enableShutdownHooks();
  await app.listen(3001);

  return app.getUrl();
}

void (async (): Promise<void> => {
  try {
    const url = await bootstrap();
    NestLogger.log(url, 'Bootstrap');
  } catch (error) {
    NestLogger.error(error, 'Bootstrap');
  }
})();
