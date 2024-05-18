import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './models/usuario.entity';
import { Product } from './models/product.entity';
import { AuthModule } from './auth/auth.module';
import { ValidationPipe } from '@nestjs/common';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { AllExceptionsFilter } from './common/error.middleware';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { ChatModule } from './modules/chat/chat.module';

@Module({
  imports: [
    // Configuración del módulo de configuración global
    ConfigModule.forRoot({
      isGlobal: true, // Hace que el módulo de configuración sea global, disponible en toda la aplicación
    }),
    // Importación del módulo de autenticación
    AuthModule,
    // Configuración del módulo de TypeORM para conectarse a una base de datos PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres', // Tipo de base de datos
      host: 'localhost', // Host de la base de datos
      port: 5432, // Puerto en el que se ejecuta PostgreSQL
      username: 'postgres', // Nombre de usuario de la base de datos
      password: '1234', // Contraseña del usuario de la base de datos
      database: 'db_challenge', // Nombre de la base de datos
      entities: [Usuario, Product], // Entidades que se utilizarán en la base de datos
      synchronize: true, // Sincroniza automáticamente las entidades con la base de datos (solo para desarrollo)
    }),
    // Importación del módulo de usuarios
    UserModule,
    // Importación del módulo de productos
    ProductModule,
    // Importación del módulo de chat
    ChatModule,
  ],
  controllers: [AppController], // Controladores de la aplicación
  providers: [
    AppService, // Servicio principal de la aplicación
    {
      provide: APP_FILTER, // Proveedor del filtro global de excepciones
      useClass: AllExceptionsFilter, // Clase que implementa el filtro de excepciones
    },
    {
      provide: APP_PIPE, // Proveedor de la tubería global de validación
      useClass: ValidationPipe, // Clase que implementa la tubería de validación
    },
  ],
})
export class AppModule {}
