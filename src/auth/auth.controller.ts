import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService, // Inyección del servicio de autenticación
    private readonly jwtService: JwtService, // Inyección del servicio de JWT
  ) {}

  @Post('login')
  async login(@Body() body: any): Promise<any> {
    const { username, password } = body; // Extrae el nombre de usuario y la contraseña del cuerpo de la solicitud
    const user = await this.authService.validateUser(username, password); // Valida las credenciales del usuario utilizando el servicio de autenticación
    if (!user) {
      // Si las credenciales no son válidas, lanza una excepción de no autorizado
      throw new UnauthorizedException('Credenciales inválidas');
    }
    // Si la autenticación es exitosa, firma y emite el token JWT
    const token = this.jwtService.sign({ username: user.username });
    // Devuelve el token JWT en la respuesta
    return { access_token: token };
  }
}

