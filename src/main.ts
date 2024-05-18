import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

//La función bootstrap() se define como una función asíncrona que se encarga de iniciar la aplicación.
async function bootstrap() {
  dotenv.config();
  //Se utiliza NestFactory.create() para crear una instancia de la aplicación principal, pasando el módulo principal AppModule.
  const app = await NestFactory.create(AppModule);
  //Se crea un objeto DocumentBuilder para configurar la documentación de Swagger con detalles como el título, etc.
  const options = new DocumentBuilder()
    .setTitle('Your API Title')
    .setDescription('Your API Description')
    .setVersion('1.0')
    .build();
  // se genera el documento de Swagger utilizando SwaggerModule.createDocument()
  const document = SwaggerModule.createDocument(app, options);
  //se utiliza SwaggerModule.setup() para habilitar Swagger en la ruta /api de la aplicación.
  SwaggerModule.setup('api', app, document);
  //se utiliza el método app.listen() para iniciar el servidor y escuchar en el puerto 3000.
  await app.listen(3000);
}
bootstrap();
