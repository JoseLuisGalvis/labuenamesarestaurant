import React, { useState } from "react";
import { Bed, Sparkles, Users } from "lucide-react";
import trifle from "../assets/images/trifle.jpeg";
import arroz from "../assets/images/arroz_leche.jpeg";

const DessertSection = ({ darkMode }) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <section
      id="desserts"
      className={`py-5 ${
        darkMode ? "bg-dark text-light" : "bg-white text-dark"
      }`}
    >
      <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center px-3">
        <div className="text-center mb-5">
          <h2 className="display-4 font-serif fw-bold mb-3">Nuestro Menú</h2>
        </div>
        <div className="row g-4">
          {/* ================================
                  Carrusel Postres
              ================================= */}
          <div
            className="col-lg-6 mb-4 mb-lg-0"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <div
              id="startersCarousel"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
              data-bs-interval="4000"
            >
              <div
                className="carousel-inner rounded shadow-lg"
                style={{
                  height: "500px",
                  overflow: "hidden",
                }}
              >
                {/* Imagen 1 */}
                <div className="carousel-item active h-100">
                  <img
                    src={trifle}
                    alt="Entrada Salteados"
                    className="d-block w-100 h-100"
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                      transform:
                        hoveredImage === 0 ? "scale(1.05)" : "scale(1)",
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => setHoveredImage(0)}
                    onMouseLeave={() => setHoveredImage(null)}
                  />
                </div>

                {/* Imagen 2 */}
                <div className="carousel-item h-100">
                  <img
                    src={arroz}
                    alt="Entrada Mejillones"
                    className="d-block w-100 h-100"
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                      transform:
                        hoveredImage === 1 ? "scale(1.05)" : "scale(1)",
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => setHoveredImage(1)}
                    onMouseLeave={() => setHoveredImage(null)}
                  />
                </div>
              </div>

              {/* Controles */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#startersCarousel"
                data-bs-slide="prev"
                style={{ opacity: 0.8, transition: "opacity 0.3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                  style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" }}
                />
                <span className="visually-hidden">Anterior</span>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#startersCarousel"
                data-bs-slide="next"
                style={{ opacity: 0.8, transition: "opacity 0.3s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                  style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" }}
                />
                <span className="visually-hidden">Siguiente</span>
              </button>

              {/* Indicadores */}
              <div className="carousel-indicators">
                {[0, 1].map((idx) => (
                  <button
                    key={idx}
                    type="button"
                    data-bs-target="#startersCarousel"
                    data-bs-slide-to={idx}
                    className={idx === 0 ? "active" : ""}
                    aria-label={`Slide ${idx + 1}`}
                    aria-current={idx === 0 ? "true" : undefined}
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      transition: "all 0.3s ease",
                    }}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          {/* ================================
        Texto Postres
================================= */}
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <h3 className="mb-3">POSTRES</h3>

            <p className="text-start text-md-justify">
              Cerrá tu experiencia gastronómica con una selección de postres
              pensados para deleitar el paladar. Preparaciones dulces, cremosas
              y artesanales, elaboradas con ingredientes frescos y un toque de
              sofisticación para disfrutar hasta el último bocado.
            </p>

            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-start">
                <Bed size={20} className="me-2 mt-1 flex-shrink-0" />
                <span>
                  Opciones clásicas y contemporáneas para todos los gustos
                </span>
              </li>

              <li className="mb-2 d-flex align-items-start">
                <Sparkles size={20} className="me-2 mt-1 flex-shrink-0" />
                <span>Presentaciones delicadas con un toque artesanal</span>
              </li>

              <li className="mb-2 d-flex align-items-start">
                <Users size={20} className="me-2 mt-1 flex-shrink-0" />
                <span>
                  Perfectos para compartir o disfrutar individualmente como
                  cierre ideal
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DessertSection;
