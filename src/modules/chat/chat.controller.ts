// Importa los módulos y decoradores necesarios de NestJS
import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatDto } from './chat.dto';

// Marca la clase como un controlador de NestJS y define el prefijo de ruta 'chatgpt' para todos los endpoints de este controlador
@Controller('chatgpt')
export class ChatController {
  // Inyecta el servicio ChatService en el controlador
  constructor(private readonly service: ChatService) {}

  // Define un endpoint POST en la ruta 'query'
  @Post('query')
  // Maneja las solicitudes POST en la ruta 'query' para obtener la completación del chat
  getChatCompletionMessage (
    // Usa el decorador @Body para extraer y validar los datos de la solicitud, usando un ValidationPipe para transformar los datos de entrada
    @Body(new ValidationPipe({ transform: true })) data: ChatDto,
   ) {
    // Llama al método getAiModelAnswer del servicio ChatService y devuelve la respuesta
    return this.service.getAiModelAnswer(data);
  }
}
