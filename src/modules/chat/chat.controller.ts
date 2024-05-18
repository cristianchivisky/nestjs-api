// Importa los módulos y decoradores necesarios de NestJS
import { Controller, Post, Body } from '@nestjs/common';
import { ChatService } from './chat.service';

// Marca la clase como un controlador de NestJS y define el prefijo de ruta 'chatgpt' para todos los endpoints de este controlador
@Controller('chatgpt')
export class ChatController {
  // Inyecta el servicio ChatService en el controlador
  constructor(private readonly chatService: ChatService) {}

  // Define un endpoint POST en la ruta 'query'
  @Post('query')
  async query(@Body('prompt') prompt: string): Promise<string> {
    // Llama al método sendMessage del servicio ChatService con el prompt recibido en el cuerpo de la solicitud
    return await this.chatService.sendMessage(prompt);
  }
}
