// Importa el módulo de NestJS
import { Module } from '@nestjs/common';
import { ChatService } from './chat.service'; // Importa el servicio de chat
import { ChatController } from './chat.controller'; // Importa el controlador del chat

// Define un módulo de NestJS para el chat
@Module({
  providers: [ChatService], // Define ChatService como proveedor para la inyección de dependencias
  controllers: [ChatController], // Registra ChatController como controlador en este módulo
})
export class ChatModule {} // Exporta la clase ChatModule
