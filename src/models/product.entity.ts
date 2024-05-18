// Importa los decoradores y tipos necesarios de TypeORM y Swagger
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

// Marca la clase Product como una entidad de base de datos
@Entity()
export class Product {
  // Define la columna de clave primaria autogenerada
  @PrimaryGeneratedColumn()
  @ApiProperty() // Marca esta propiedad para incluirla en la documentación Swagger
  id: number;

  // Define una columna para el nombre del producto
  @Column()
  @ApiProperty() // Marca esta propiedad para incluirla en la documentación Swagger
  name: string;
  
  // Define una columna para la descripción del producto
  @Column()
  @ApiProperty() // Marca esta propiedad para incluirla en la documentación Swagger
  description: string;

  // Define una columna para el precio del producto
  @Column()
  @ApiProperty() // Marca esta propiedad para incluirla en la documentación Swagger
  price: number;
}
