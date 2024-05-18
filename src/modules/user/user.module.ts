import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Usuario } from '../../models/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])], // Importa el repositorio de TypeORM para la entidad Usuario
  controllers: [UserController], // Define el controlador UserController para gestionar las solicitudes relacionadas con usuarios
  providers: [UserService], // Proporciona el servicio UserService para la lógica empresarial relacionada con usuarios
  exports: [UserService], // Exporta el servicio UserService para que esté disponible para otros módulos
})
export class UserModule {}
