import React, { useState, useRef, useEffect } from "react";
import { Bot, X, Send } from "lucide-react";

const ChatWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content:
            "¡Hola! Soy María, tu asistente virtual de La Buena Mesa 😊 ¿En qué puedo ayudarte hoy? Puedo informarte sobre nuestro menú, horarios, hacer una reserva o lo que necesites.",
        },
      ]);
    }
  }, [isChatOpen]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;
    const userMessage = inputMessage.trim();
    setInputMessage("");

    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // IMPORTANTE: Cambia esta URL cuando despliegues a Vercel
      const API_URL = "http://localhost:3000/api/chat";

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          sessionId: Date.now().toString(),
        }),
      });
      const data = await response.json();
      if (data.success) {
        setMessages([
          ...newMessages,
          { role: "assistant", content: data.message },
        ]);
      } else {
        setMessages([
          ...newMessages,
          {
            role: "assistant",
            content:
              "Lo siento, tuve un problema. ¿Puedes intentarlo de nuevo? 😅",
          },
        ]);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "Disculpa, no pude conectarme. Por favor llama al +54 11 4567-8900 📞",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="position-fixed bottom-0 end-0 m-4 bg-amber-600 text-white p-3 rounded-circle shadow-2xl hover:bg-amber-700 transition-all hover-scale-110"
          style={{ zIndex: 50 }}
        >
          <Bot className="w-8 h-8" />
        </button>
      )}
      {isChatOpen && (
        <div
          className="position-fixed bottom-0 end-0 m-4 w-auto"
          style={{ width: "24rem", height: "37.5rem", zIndex: 50 }}
        >
          <div className="card bg-white rounded-2xl shadow-2xl d-flex flex-column h-100 border border-stone-200">
            {/* Chat Header */}
            <div className="bg-gradient-chat-header text-white p-3 rounded-t-2xl d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <div
                  className="bg-white p-2 rounded-circle"
                  style={{ opacity: 0.2 }}
                >
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="fw-bold">María - Asistente Virtual</h3>
                  <p className="fs-6 text-amber-100">Siempre disponible</p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="hover:bg-white p-1 rounded"
                style={{ opacity: 0.2 }}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {/* Chat Messages */}
            <div className="flex-grow-1 overflow-auto p-3 bg-stone-50 d-flex flex-column gap-3">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`d-flex ${
                    msg.role === "user"
                      ? "justify-content-end"
                      : "justify-content-start"
                  }`}
                >
                  <div
                    className={`w-75 p-3 rounded-2xl ${
                      msg.role === "user"
                        ? "bg-amber-600 text-white rounded-br-none"
                        : "bg-white text-stone-800 rounded-bl-none shadow-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="d-flex justify-content-start">
                  <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm">
                    <div className="d-flex gap-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-circle animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-amber-600 rounded-circle animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-amber-600 rounded-circle animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            {/* Chat Input */}
            <div className="p-3 border-top border-stone-200">
              <div className="d-flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Escribe tu mensaje..."
                  className="form-control flex-grow-1 px-3 py-2 border border-stone-300 rounded-pill focus:outline-none focus:ring-2 focus:ring-amber-500"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="btn bg-amber-600 text-white p-2 rounded-circle hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
