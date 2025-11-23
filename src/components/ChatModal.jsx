import React from "react";
import { X, Send, Bot } from "lucide-react";
import PropTypes from "prop-types";

const ChatModal = ({ darkMode, chat }) => {
  if (!chat || !chat.isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1050,
        }}
        onClick={() => chat.closeChat()} // 🔄 CAMBIADO
      />

      {/* Modal */}
      <div
        className="position-fixed top-50 start-50 translate-middle"
        style={{ zIndex: 1055 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`rounded-4 shadow-lg ${
            darkMode ? "bg-dark text-white" : "bg-white text-dark"
          }`}
          style={{ width: "24rem", maxHeight: "90vh", overflow: "hidden" }}
        >
          {/* Header */}
          <div
            className="p-3 text-white d-flex justify-content-between align-items-center"
            style={{
              background: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
            }}
          >
            <h5 className="mb-0 fw-bold">
              <Bot className="me-2" size={20} />
              María - Asistente Virtual
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={() => chat.closeChat()} // 🔄 CAMBIADO
              aria-label="Cerrar"
            />
          </div>

          {/* Body - Mensajes */}
          <div
            className="p-3 overflow-auto"
            style={{
              height: "450px",
              backgroundColor: darkMode ? "#1a1a1a" : "#f8f9fa",
            }}
          >
            <div className="d-flex flex-column gap-3">
              {chat.msgs.map((msg, i) => (
                <div
                  key={i}
                  className={`d-flex ${
                    msg.role === "user"
                      ? "justify-content-end"
                      : "justify-content-start"
                  }`}
                >
                  <div
                    className={`p-3 rounded-3 ${
                      msg.role === "user"
                        ? "bg-warning text-white"
                        : darkMode
                        ? "bg-secondary text-white"
                        : "bg-white text-dark shadow-sm"
                    }`}
                    style={{
                      maxWidth: "80%",
                      wordWrap: "break-word",
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {chat.loading && (
                <div className="d-flex justify-content-start">
                  <div
                    className={`p-3 rounded-3 ${
                      darkMode ? "bg-secondary" : "bg-white shadow-sm"
                    }`}
                  >
                    <div className="d-flex gap-2">
                      <div
                        className="spinner-grow spinner-grow-sm text-warning"
                        role="status"
                      >
                        <span className="visually-hidden">Cargando...</span>
                      </div>
                      <div
                        className="spinner-grow spinner-grow-sm text-warning"
                        role="status"
                      >
                        <span className="visually-hidden">Cargando...</span>
                      </div>
                      <div
                        className="spinner-grow spinner-grow-sm text-warning"
                        role="status"
                      >
                        <span className="visually-hidden">Cargando...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={chat.endRef} />
            </div>
          </div>

          {/* Footer - Input */}
          <div
            className={`p-3 border-top ${darkMode ? "border-secondary" : ""}`}
          >
            <div className="d-flex gap-2">
              <input
                type="text"
                value={chat.input} // eslint-disable-line
                onChange={(e) => chat.setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && chat.send()}
                placeholder="Escribe tu mensaje..."
                className={`form-control ${
                  darkMode ? "bg-dark text-white border-secondary" : ""
                }`}
                disabled={chat.loading}
              />
              <button
                onClick={() => chat?.send()} // 🔄 Operador opcional
                disabled={chat?.loading || !chat?.input?.trim()} // 🔄 Operador opcional
                className="btn btn-warning text-white"
                style={{ minWidth: "44px" }}
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// 🆕 Definir PropTypes al final
ChatModal.propTypes = {
  darkMode: PropTypes.bool,
  chat: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired,
    closeChat: PropTypes.func.isRequired,
    msgs: PropTypes.array.isRequired,
    input: PropTypes.string.isRequired,
    setInput: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    send: PropTypes.func.isRequired,
    endRef: PropTypes.object.isRequired,
  }).isRequired,
};

export default ChatModal;
