
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres un asistente de soporte técnico amable para un sitio web que se encuentra actualmente en mantenimiento.
Tu objetivo es responder preguntas de los usuarios de manera profesional y calmada.

Información actual del mantenimiento:
- Motivo: Actualización importante de infraestructura para mejorar la velocidad y seguridad.
- Tiempo estimado: 2 horas aproximadamente.
- Estado: Migración de base de datos en curso.
- Mensaje principal: "Esta página no está disponible en este momento. Mantenimiento en progreso."

No des fechas exactas ni promesas técnicas detalladas que no conozcas. Sé empático con el usuario.
`;

export const getGeminiResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "Lo siento, tuve un problema al procesar tu solicitud. Estamos trabajando para volver pronto.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "En este momento nuestra IA también está en mantenimiento, pero el equipo técnico está trabajando arduamente.";
  }
};
