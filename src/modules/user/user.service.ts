import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Usuario } from '../../models/usuario.entity';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Usuario)
    private readonly userRepository: Repository<Usuario>,
  ) {}

  // Método para obtener todos los usuarios
  async findAll(): Promise<Usuario[]> {
    return await this.userRepository.find();
  }

  // Método para encontrar un usuario por su ID
  async findOneById(id: number): Promise<Usuario> {
    const options: FindOneOptions<Usuario> = { where: { id } };
    const user = await this.userRepository.findOne(options);
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return user;
  }

  // Método para encontrar un usuario por su nombre de usuario
  async findOneByUsername(username: string): Promise<Usuario> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return user;
  }

  // Método para comparar contraseñas
  async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  // Método para crear un nuevo usuario
  async create(createUserDto: CreateUserDto): Promise<Usuario> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const newUser = this.userRepository.create({
      username: createUserDto.username,
      password: hashedPassword,
    });
    return await this.userRepository.save(newUser);
  }

  // Método para actualizar un usuario existente
  async update(id: number, updateUserDto: UpdateUserDto): Promise<Usuario> {
    const user = await this.findOneById(id);
    user.username = updateUserDto.username ?? user.username;
    if (updateUserDto.password) {
      user.password = await bcrypt.hash(updateUserDto.password, 10);
    }
    return await this.userRepository.save(user);
  }

  // Método para eliminar un usuario por su ID
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
