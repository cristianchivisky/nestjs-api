// Importa el decorador @Catch y la clase BaseExceptionFilter de NestJS
import { Catch, HttpException, HttpStatus, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

// Aplica el decorador @Catch para indicar que esta clase es un filtro de excepciones global
@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  // Sobrescribe el método catch para manejar las excepciones
  catch(exception: unknown, host: ArgumentsHost) {
    // Obtiene el contexto HTTP del host de argumentos
    const ctx = host.switchToHttp();
    // Obtiene la respuesta HTTP del contexto
    const response = ctx.getResponse();
    // Obtiene la solicitud HTTP del contexto
    const request = ctx.getRequest();

    // Determina el estado de la respuesta basado en el tipo de excepción
    const status = exception instanceof HttpException
      ? exception.getStatus() // Si la excepción es una HttpException, obtiene el estado de la excepción
      : HttpStatus.INTERNAL_SERVER_ERROR; // Si no, usa el estado de error interno del servidor

    // Envía una respuesta JSON con detalles del error
    response.status(status).json({
      statusCode: status, // Estado HTTP de la respuesta
      timestamp: new Date().toISOString(), // Marca de tiempo del error
      path: request.url, // URL de la solicitud que causó el error
    });
  }
}
