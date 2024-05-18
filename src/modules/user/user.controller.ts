import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param
} from '@nestjs/common';
import { UserService } from './user.service';
import { Usuario } from '../../models/usuario.entity';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@ApiTags('Users') // Etiqueta de Swagger para documentación
@Controller('users') // Controlador para la gestión de usuarios
export class UserController {
  constructor(private readonly userService: UserService) {} // Constructor que inyecta el servicio de usuarios

  @Get()
  @ApiOperation({ summary: 'Get all users' }) // Documentación del endpoint
  async findAll(): Promise<Usuario[]> {
    return this.userService.findAll(); // Retorna todos los usuarios
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' }) // Documentación del endpoint
  @ApiParam({ name: 'id', description: 'User ID' }) // Documentación del parámetro de la ruta
  async findOne(@Param('id') id: number): Promise<Usuario> {
    return this.userService.findOneById(id); // Retorna un usuario por su ID
  }

  @Post()
  @ApiOperation({ summary: 'Create new user' }) // Documentación del endpoint
  async create(@Body() createUserDto: CreateUserDto): Promise<Usuario> {
    return this.userService.create(createUserDto); // Crea un nuevo usuario
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar usuario por ID' }) // Documentación del endpoint
  @ApiResponse({
    status: 200,
    description: 'Usuario actualizado correctamente' // Documentación de la respuesta exitosa
  })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado' }) // Documentación de la respuesta de error
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<Usuario> {
    return this.userService.update(id, updateUserDto); // Actualiza un usuario por su ID
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id); // Elimina un usuario por su ID
  }
}
