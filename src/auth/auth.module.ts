import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    // Configuración del módulo JwtModule
    JwtModule.register({
      secret: 'your-secret-key', // Clave secreta utilizada para firmar los tokens JWT
      signOptions: {
        expiresIn: '1d', // Configuración de la duración del token, expira en 1 día
      },
    }),
  ],
  exports: [JwtModule], // Exporta JwtModule para que pueda ser utilizado en otros módulos
})
export class AuthModule {}
