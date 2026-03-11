"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { cn } from "@/lib/utils";
import { useChatStore } from "@/stores/chatStore";

export function MiniChat() {
  const { isOpen, toggleChat, messages, addMessage } = useChatStore();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    addMessage(input, false);
    setInput("");

    // Simular resposta do bot
    setTimeout(() => {
      const responses = [
        "Obrigado pelo contacto! O Celestino responderá em breve.",
        "Pode enviar um email direto para: andradetchacamba421@gmail.com",
        "O Celestino está disponível para novos projetos!",
        "Para mais informações, consulte a secção de Experiência.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      addMessage(randomResponse, true);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className={cn(
          "fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg",
          "bg-gradient-to-r from-blue-600 to-cyan-500 text-white",
          isOpen && "hidden"
        )}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-80 md:w-96 bg-card border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <Bot className="h-5 w-5" />
                <span className="font-semibold">Assistente Virtual</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={toggleChat}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-background">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex gap-2",
                    msg.isBot ? "flex-row" : "flex-row-reverse"
                  )}
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center",
                      msg.isBot
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-600"
                    )}
                  >
                    {msg.isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </div>
                  <div
                    className={cn(
                      "max-w-[70%] p-3 rounded-2xl text-sm",
                      msg.isBot
                        ? "bg-muted rounded-tl-none"
                        : "bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-tr-none"
                    )}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-card">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escreva uma mensagem..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSend}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}