import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateTravelItinerary = async (userPrompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User request: ${userPrompt}`,
      config: {
        systemInstruction: `Eres un agente de viajes experto y entusiasta llamado "Tereviajes AI".
        Tu objetivo es crear itinerarios de viaje breves, emocionantes y personalizados basados en la solicitud del usuario.
        
        Reglas:
        1. Respuesta en formato Markdown limpio.
        2. Usa emojis para hacerlo visualmente atractivo.
        3. Estructura la respuesta con:
           - 🌍 Un título inspirador.
           - ✈️ Resumen del viaje.
           - 📅 Itinerario día a día (puntos clave).
           - 💡 Un consejo local secreto.
        4. Mantén el tono profesional pero aventurero.
        5. Si la solicitud no tiene sentido o no es sobre viajes, responde amablemente que solo puedes ayudar con planes de viaje.`,
      },
    });

    return response.text || "Lo siento, no pude generar un itinerario en este momento.";
  } catch (error) {
    console.error("Error generating itinerary:", error);
    throw error;
  }
};