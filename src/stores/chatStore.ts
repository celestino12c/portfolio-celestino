import { create } from "zustand";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatState {
  isOpen: boolean;
  messages: Message[];
  toggleChat: () => void;
  addMessage: (text: string, isBot: boolean) => void;
  clearMessages: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  isOpen: false,
  messages: [
    {
      id: "1",
      text: "Olá! Sou o assistente virtual do Celestino. Como posso ajudar?",
      isBot: true,
      timestamp: new Date(),
    },
  ],
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  addMessage: (text, isBot) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: Date.now().toString(),
          text,
          isBot,
          timestamp: new Date(),
        },
      ],
    })),
  clearMessages: () =>
    set({
      messages: [
        {
          id: "1",
          text: "Olá! Sou o assistente virtual do Celestino. Como posso ajudar?",
          isBot: true,
          timestamp: new Date(),
        },
      ],
    }),
}));