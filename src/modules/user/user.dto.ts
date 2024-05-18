import { IsNotEmpty, IsString, IsOptional, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string; // Nombre de usuario del nuevo usuario, obligatorio y debe ser una cadena de texto

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string; // Contraseña del nuevo usuario, obligatoria y debe tener al menos 6 caracteres
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  username?: string; // Nombre de usuario actualizado, opcional y debe ser una cadena de texto

  @IsOptional()
  @IsString()
  password?: string; // Contraseña actualizada, opcional y debe ser una cadena de texto
}
