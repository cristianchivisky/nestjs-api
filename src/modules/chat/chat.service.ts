import { Injectable } from '@nestjs/common';
import { ChatOpenAI } from '@langchain/openai'; // Importa la clase ChatOpenAI del paquete langchain/openai

@Injectable()
export class ChatService {
  private chatGPT: ChatOpenAI; // Variable privada para almacenar la instancia de ChatOpenAI

  constructor() {
    // Obtiene la API key de OpenAI del entorno
    const apiKey = process.env.OPENAI_API_KEY;
    
    // Si no se encuentra la API key, se lanza un error
    if (!apiKey) {
      throw new Error("API key not found");
    }

    // Inicializa el objeto ChatOpenAI con la API key y el modelo deseado
    this.chatGPT = new ChatOpenAI({ 
      apiKey: apiKey,
      modelName: "gpt-3.5-turbo" // Modelo de OpenAI a utilizar
    });
  }

  // Método para enviar un mensaje al modelo de lenguaje de OpenAI y obtener una respuesta
  async sendMessage(message: string): Promise<string> {
    try {
      // Invoca el modelo de lenguaje de OpenAI con el mensaje dado
      const response = await this.chatGPT.invoke(message);

      // Verifica si la respuesta es de tipo MessageContent antes de intentar acceder a su propiedad text
      if (typeof response === 'object' && 'text' in response) {
        return response.text; // Devuelve el texto de la respuesta si existe
      } else {
        return ''; // Devuelve una cadena vacía si la respuesta no es válida
      }
    } catch (error) {
      console.error("Error during ChatGPT invocation:", error); // Registra cualquier error ocurrido durante la invocación
      throw new Error("Internal Server Error"); // Lanza un error interno del servidor en caso de fallo
    }
  }
}
