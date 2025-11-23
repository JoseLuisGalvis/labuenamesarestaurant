import React, { useState } from "react";
import { Bed, Sparkles, Users } from "lucide-react";
import paella from "../assets/images/paella.jpeg";
import pesto from "../assets/images/pesto.jpeg";

const MainCourseSection = ({ darkMode }) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <section
      id="maincourse"
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
              Texto Plato Principal
           ================================= */}
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <h3 className="mb-3">PLATOS PRINCIPALES</h3>

            <p className="text-start text-md-justify">
              Descubrí nuestra selección de platos principales inspirados en la
              cocina mediterránea. Recetas equilibradas y llenas de sabor,
              elaboradas con ingredientes frescos, hierbas aromáticas y técnicas
              tradicionales que realzan cada bocado.
            </p>

            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-start">
                <Bed size={20} className="me-2 mt-1 flex-shrink-0" />
                <span>
                  Opciones variadas que combinan carnes, pescados y vegetales
                </span>
              </li>

              <li className="mb-2 d-flex align-items-start">
                <Sparkles size={20} className="me-2 mt-1 flex-shrink-0" />
                <span>Presentaciones cuidadas y sabores auténticos</span>
              </li>

              <li className="mb-2 d-flex align-items-start">
                <Users size={20} className="me-2 mt-1 flex-shrink-0" />
                <span>
                  Ideales para compartir en familia o disfrutar como plato
                  principal individual
                </span>
              </li>
            </ul>
          </div>

          {/* ================================
                  Carrusel Platos Principales
              ================================= */}
          <div
            className="col-lg-6 mb-4 mb-lg-0"
            data-aos="fade-left"
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
                    src={paella}
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
                    src={pesto}
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
        </div>
      </div>
    </section>
  );
};

export default MainCourseSection;
