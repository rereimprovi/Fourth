import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY environment variable is not set.");
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = async (): Promise<Chat> => {
  try {
    const ai = getAiClient();
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are 'Lumina', a sophisticated and helpful AI personal fashion stylist for the Lumina Fashion brand. 
        Your goal is to help customers find outfit ideas, give color combination advice, and suggest styles based on occasions (e.g., weddings, casual fridays, beach trips).
        Keep your responses concise, stylish, and encouraging. 
        If asked about products, assume we sell high-quality modern basics, elegant evening wear, and comfortable streetwear.
        Do not use markdown formatting extensively, keep it simple for a chat interface.`,
        temperature: 0.7,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat", error);
    throw error;
  }
};

export const sendMessageToGemini = async function* (message: string): AsyncGenerator<string, void, unknown> {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    throw new Error("Chat session could not be initialized.");
  }

  try {
    const result = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of result) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    yield "I'm having a little trouble connecting to my fashion database right now. Please try again in a moment.";
  }
};
