import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  ChefHat,
  QrCode,
  Instagram,
  Facebook,
  Twitter,
  Bot,
} from "lucide-react";
import useChat from "../hooks/useChat";
import ChatModal from "./ChatModal";

const Footer = ({ darkMode }) => {
  const chat = useChat();
  return (
    <footer
      className={`py-5 ${
        darkMode ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      <div className="container">
        <div className="row g-4 align-items-start">
          {/* 1. Logo + QR */}
          <div className="col-lg-3" data-aos="fade-up">
            {/* Brand */}
            <a
              className="navbar-brand d-flex align-items-center gap-2"
              href="#hero"
            >
              <ChefHat className="text-amber-600" />
              <span className="fw-bold fs-4">La Buena Mesa</span>
            </a>
            <p className="small mb-3">
              Experiencia gastronómica única en Buenos Aires.
            </p>

            {/* QR pequeño y elegante */}
            <div className="d-inline-block bg-white p-2 rounded-3 shadow-sm">
              <QrCode size={80} className="text-dark" />
            </div>
          </div>

          {/* 2. Enlaces Rápidos */}
          <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <h6 className="fw-bold mb-3">Enlaces Rápidos</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="#hero" className="text-decoration-none">
                  Inicio
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-decoration-none">
                  Nosotros
                </a>
              </li>
              <li className="mb-2">
                <a href="#starters" className="text-decoration-none">
                  Entradas
                </a>
              </li>
              <li className="mb-2">
                <a href="#maincourse" className="text-decoration-none">
                  Plato Principal
                </a>
              </li>
              <li className="mb-2">
                <a href="#desserts" className="text-decoration-none">
                  Postres
                </a>
              </li>
              <li className="mb-2">
                <a href="#gallery" className="text-decoration-none">
                  Galería
                </a>
              </li>

              <li className="mb-2">
                <a href="#contact" className="text-decoration-none">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* 3. RRSS */}
          <div className="col-lg-3" data-aos="fade-up" data-aos-delay="200">
            <h6 className="fw-bold mb-3">Seguinos</h6>
            <div className="d-flex gap-3">
              <a
                href="https://instagram.com/labuenamesa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <Instagram
                  size={24}
                  className="text-pink hover:text-pink-600 transition-colors"
                />
              </a>
              <a
                href="https://facebook.com/labuenamesa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <Facebook
                  size={24}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                />
              </a>
              <a
                href="https://twitter.com/labuenamesa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <Twitter
                  size={24}
                  className="text-sky-500 hover:text-sky-600 transition-colors"
                />
              </a>
            </div>
          </div>

          {/* 4. Agente AI */}
          <div className="col-lg-3" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center mt-4">
              <button
                onClick={() => chat.setIsOpen(true)}
                className="btn btn-warning btn-sm d-inline-flex align-items-center gap-2"
              >
                <Bot size={16} />
                Charlar con María
              </button>
            </div>
            {/* Modal flotante (mismo chat que antes) */}
            <ChatModal darkMode={darkMode} chat={chat} />
          </div>
        </div>

        {/* Separador elegante */}
        <hr
          className={`my-4 ${
            darkMode ? "border-secondary" : "border-gray-300"
          }`}
        />

        {/* Bottom bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small">
          <div className="mb-2 mb-md-0">
            © 2025 La Buena Mesa. Todos los derechos reservados.
          </div>
          <div className="d-flex align-items-center gap-3">
            <MapPin size={14} /> Av. Libertador 1234, Buenos Aires
            <span className="d-none d-md-inline">|</span>
            <Phone size={14} /> +54 11 4567-8900
            <span className="d-none d-md-inline">|</span>
            <Mail size={14} /> info@labuenamesa.com.ar
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
