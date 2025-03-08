import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('MainFileApplication');

  const config = new DocumentBuilder()
  .setTitle('Todo-App API')
  .setDescription('API documentation for the Todo-App API')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.APP_PORT);

  logger.log(`Application started on port ${process.env.APP_PORT}`)
}

bootstrap();
