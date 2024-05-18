import { Injectable } from '@nestjs/common';
import { UserService } from '../modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Usuario } from '../models/usuario.entity';

@Injectable()
export class AuthService {
    constructor(
        // Inyección de dependencias
        private readonly userService: UserService, // Servicio para manejar operaciones relacionadas con usuarios
        private readonly jwtService: JwtService, // Servicio para manejar operaciones relacionadas con JWT
    ) {}
    // Método para validar el usuario
    async validateUser(username: string, password: string): Promise<Usuario | null> {
        const user = await this.userService.findOneByUsername(username); // Busca al usuario por nombre de usuario
        if (!user) {
            return null; // Devuelve null si no se encuentra el usuario
        }
        const isPasswordValid = await this.userService.comparePassword(password, user.password); // Compara las contraseñas
        if (!isPasswordValid) {
            return null; // Devuelve null si la contraseña no es válida
        }
        return user; // Devuelve el usuario si la validación es exitosa
    }
    // Método para manejar el login
    async login(user: Usuario): Promise<{ accessToken: string; user: Usuario }> {
        const payload = { userId: user.id }; // Define el payload del JWT con el ID del usuario
        const accessToken = this.jwtService.sign(payload); // Firma el token JWT con el payload
        return {
            accessToken, // Devuelve el token de acceso
            user, // Devuelve el usuario autenticado
        };
    }
}
