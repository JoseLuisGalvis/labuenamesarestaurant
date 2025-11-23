import React from "react";
import heroImg from "../assets/images/hero.jpeg"; // ajusta la ruta

const HeroSection = ({ darkMode }) => {
  return (
    <section
      id="hero"
      className={`hero-wrapper pt-5 min-h-screen d-flex align-items-center ${
        darkMode ? "bg-dark text-light" : "bg-white text-dark"
      }`}
    >
      {/* 🔹 Imagen de fondo */}
      <img className="hero-image" src={heroImg} alt="Fachada del restaurante" />

      {/* 🔹 Overlay */}
      <div className="hero-overlay"></div>

      {/* 🔹 Contenido (tu contenido original) */}
      <div
        className="container mx-auto px-4 py-5 position-relative"
        style={{ zIndex: 3 }}
      >
        <div className="text-center">
          <h1 className="display-3 font-serif fw-bold text-white mb-4">
            Sabores que <span className="text-amber-400">Inspiran</span>
          </h1>

          <p className="fs-3 text-white-50 mb-4 max-w-2xl mx-auto">
            Cocina mediterránea con toques modernos en el corazón de Buenos
            Aires
          </p>

          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
            <a
              href="#starters"
              className="btn btn-warning text-white px-5 py-3 rounded-pill fs-5 fw-semibold shadow"
            >
              Ver Menú
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
