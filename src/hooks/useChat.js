// src/hooks/useChat.js
import { useState, useRef, useEffect } from "react";

const useChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  // 🔍 DEBUG
  console.log("useChat render:", {
    input: typeof input,
    isRef: input?.current !== undefined,
  });

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  useEffect(() => {
    if (isOpen && msgs.length === 0) {
      setMsgs([
        {
          role: "assistant",
          content:
            "¡Hola! Soy María, tu asistente virtual de La Buena Mesa 😊 ¿En qué puedo ayudarte hoy?",
        },
      ]);
    }
  }, [isOpen, msgs.length]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    const newMsgs = [...msgs, { role: "user", content: userMsg }];
    setMsgs(newMsgs);
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMsgs.map((m) => ({ role: m.role, content: m.content })),
          sessionId: Date.now().toString(),
        }),
      });
      const data = await res.json();
      setMsgs([
        ...newMsgs,
        {
          role: "assistant",
          content: data.success ? data.message : "Lo siento, tuve un problema.",
        },
      ]);
    } catch {
      setMsgs([
        ...newMsgs,
        {
          role: "assistant",
          content: "Disculpa, no pude conectarme. Llama al +54 11 2649-6197 📞",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // 🆕 Función para resetear el chat
  const reset = () => {
    setMsgs([]);
    setInput("");
    setLoading(false);
  };

  // 🆕 Cerrar Y resetear
  const closeChat = () => {
    setIsOpen(false);
    reset();
  };

  return {
    isOpen,
    setIsOpen,
    closeChat, // 🆕 Exportar closeChat
    msgs,
    input,
    setInput,
    loading,
    send,
    endRef,
  };
};

export default useChat;
