import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from '@nestjs/platform-express';
import {sveltTemplateEngine} from './svelte-template-engine';
import {Logger} from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.engine('svelte', sveltTemplateEngine);
  app.setViewEngine('svelte');
  await app.listen(3000);
  Logger.log(`server listning: ${await app.getUrl()}`)
}
bootstrap();
