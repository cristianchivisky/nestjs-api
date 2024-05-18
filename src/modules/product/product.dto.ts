import { IsNotEmpty, IsString, IsOptional, IsNumber, Min } from 'class-validator';

// DTO (Data Transfer Object) para la creación de un nuevo producto
export class CreateProductDto {
  @IsNotEmpty() // Indica que el campo no puede estar vacío
  @IsString() // Indica que el campo debe ser una cadena de texto
  name: string; // Nombre del producto

  @IsOptional() // Indica que el campo es opcional
  @IsString() // Indica que el campo debe ser una cadena de texto
  description?: string; // Descripción opcional del producto

  @IsNotEmpty() // Indica que el campo no puede estar vacío
  @IsNumber() // Indica que el campo debe ser un número
  @Min(0) // Indica que el valor mínimo permitido es 0
  price: number; // Precio del producto
}

// DTO para actualizar un producto existente
export class UpdateProductDto {
  @IsOptional() // Indica que el campo es opcional
  @IsString() // Indica que el campo debe ser una cadena de texto
  name?: string; // Nuevo nombre del producto (opcional)

  @IsOptional() // Indica que el campo es opcional
  @IsString() // Indica que el campo debe ser una cadena de texto
  description?: string; // Nueva descripción del producto (opcional)

  @IsOptional() // Indica que el campo es opcional
  @IsNumber() // Indica que el campo debe ser un número
  @Min(0) // Indica que el valor mínimo permitido es 0
  price?: number; // Nuevo precio del producto (opcional)
}
