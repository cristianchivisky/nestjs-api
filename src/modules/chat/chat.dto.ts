import { IsNotEmpty, IsString } from 'class-validator';

// Define una clase DTO (Data Transfer Object) para la solicitud de chat
export class ChatDto {
    @IsString() // Valida que el campo sea una cadena de texto
    @IsNotEmpty() // Valida que el campo no esté vacío
    message: string; // Campo que contiene el mensaje del usuario
}

// Define una clase DTO para la respuesta del chat
export class ChatResponseDto {
    @IsNotEmpty() // Valida que el campo no esté vacío
    @IsString() // Valida que el campo sea una cadena de texto
    aiMessage: string; // Campo que contiene el mensaje de respuesta del modelo AI

    // Método estático para obtener una instancia de ChatResponseDto con el mensaje de AI proporcionado
    static getInstance(aiMessage: string) {
        const result = new ChatResponseDto(); // Crea una nueva instancia de ChatResponseDto
        result.aiMessage = aiMessage; // Asigna el mensaje AI proporcionado al campo aiMessage
        return result; // Devuelve la instancia creada
    }
}
