// Importa los decoradores y tipos necesarios de TypeORM y Swagger
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

// Marca la clase Usuario como una entidad de base de datos
@Entity()
export class Usuario {
  // Define la columna de clave primaria autogenerada
  @PrimaryGeneratedColumn()
  @ApiProperty() // Marca esta propiedad para incluirla en la documentación Swagger
  id: number;

  // Define una columna para el nombre de usuario
  @Column()
  @ApiProperty() // Marca esta propiedad para incluirla en la documentación Swagger
  username: string;

  // Define una columna para la contraseña del usuario
  @Column()
  @ApiProperty() // Marca esta propiedad para incluirla en la documentación Swagger
  password: string;
}
