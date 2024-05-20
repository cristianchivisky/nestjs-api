import { HumanMessage, AIMessage, SystemMessage, BaseMessage } from "langchain/schema";

// Clase que maneja el historial de chat
export class ChatHistoryManager {
    readonly chatHistory: BaseMessage[]; // Arreglo para almacenar el historial de mensajes

    // Constructor que inicializa el historial de chat y opcionalmente agrega un mensaje del sistema
    constructor(systemMessage?: string) {
        this.chatHistory = []; // Inicializa el historial de chat como un arreglo vacío

        if (systemMessage) {
            this.addSystemMessage(systemMessage); // Agrega un mensaje del sistema si se proporciona
        }
    }

    // Método privado para agregar un mensaje del sistema al historial
    private addSystemMessage(message: string) {
        this.chatHistory.push(new SystemMessage(message)); // Crea un nuevo mensaje del sistema y lo agrega al historial
    }

    // Método para agregar un mensaje de AI al historial
    addAiMessage(message: string) {
        this.chatHistory.push(new AIMessage(message)); // Crea un nuevo mensaje de AI y lo agrega al historial
    }

    // Método para agregar un mensaje humano al historial
    addHumanMessage(message: string) {
        this.chatHistory.push(new HumanMessage(message)); // Crea un nuevo mensaje humano y lo agrega al historial
    }
}
