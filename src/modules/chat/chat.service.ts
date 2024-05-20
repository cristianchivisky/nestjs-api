import { Injectable } from '@nestjs/common';
import { ChatOpenAI } from '@langchain/openai';
import { ChatResponseDto, ChatDto } from './chat.dto';
import { ChatHistoryManager } from './chat-history-manager';

// Define una interfaz para el contenido del mensaje
interface MessageContent {
  text: string;
}

@Injectable()
export class ChatService {
  private readonly chatHistory: ChatHistoryManager;
  private readonly chat: ChatOpenAI;

  constructor() {
    // Inicializa el historial de chat y la instancia del servicio ChatOpenAI
    this.chatHistory = new ChatHistoryManager();

    // Obtiene la API key de OpenAI del entorno
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("API key not found"); // Lanza un error si la API key no está definida
    }

    // Inicializa el objeto ChatOpenAI con la API key y el modelo deseado
    this.chat = new ChatOpenAI({
      temperature: 1,
      openAIApiKey: apiKey,
      modelName: "gpt-3.5-turbo"
    });
  }

  // Método para obtener la respuesta del modelo de lenguaje AI
  async getAiModelAnswer(data: ChatDto) {
    try {
      this.chatHistory.addHumanMessage(data.message); // Agrega el mensaje humano al historial de chat

      // Realiza la predicción del mensaje AI basado en el historial de chat
      const result = await this.chat.predictMessages(this.chatHistory.chatHistory);

      // Asegura que result.content sea un arreglo de objetos MessageContent
      const aiMessages = result.content as MessageContent[];
      // Concatena los textos de los mensajes AI en un solo mensaje
      const aiMessage = aiMessages.map(content => content.text).join(' ');

      // Agrega el mensaje AI al historial de chat
      this.chatHistory.addAiMessage(aiMessage);

      // Retorna una instancia de ChatResponseDto con el mensaje AI generado
      return ChatResponseDto.getInstance(aiMessage);
    } catch (error) {
      // Manejo de errores específicos
      if (error instanceof Error) {
        if (error.message.includes('429')) {
          console.error("Error: Exceeded API quota", error);
          throw new Error("You have exceeded your API quota. Please check your plan and billing details.");
        }
        console.error("Error processing AI model answer:", error);
        throw new Error("Failed to get AI model answer. Please try again later.");
      }
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred. Please try again later.");
    }
  }
}
