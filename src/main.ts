import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import initAppDataSource from './app-data-source';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true, bodyParser: true});
  // cors
  app.enableCors();
  const config = new DocumentBuilder()
  .setTitle('Nest API')
  .setDescription('the description of the API')
  .setVersion('1.0')
  .build();

  await initAppDataSource();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);
  await app.listen(3002);
}
bootstrap();
