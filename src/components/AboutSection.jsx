import React from "react";
import { Users, ChefHat, Wine } from "lucide-react";
import paellaImg from "../assets/images/paella.avif";

// ----------------------
//   COMPONENTE Tilt3D
// ----------------------
const Tilt3D = ({ children, intensity = 10, glareIntensity = 0.3 }) => {
  const [rotation, setRotation] = React.useState({ x: 0, y: 0 });
  const [glare, setGlare] = React.useState({ x: 50, y: 50, opacity: 0 });
  const ref = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y - rect.height / 2) / intensity;
    const rotateY = (rect.width / 2 - x) / intensity;

    setRotation({ x: rotateX, y: rotateY });

    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: glareIntensity,
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="position-relative"
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
    >
      {children}

      {/* Glare */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 50%)`,
          borderRadius: "20px",
          pointerEvents: "none",
          transition: "opacity 0.15s ease-out",
        }}
      />
    </div>
  );
};

// ----------------------
//   ABOUT SECTION
// ----------------------

const AboutSection = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-5 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <div className="container min-vh-100 d-flex justify-content-center align-items-center px-3">
        <div className="row g-4">
          {/* ---------------- TEXTO ---------------- */}
          <div
            className="col-md-6"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <h2
              className={`display-4 fw-bold mb-4 ${
                darkMode ? "text-white" : "text-dark"
              }`}
            >
              Nuestra Historia
            </h2>

            <p
              className={`fs-5 mb-4 ${darkMode ? "text-light" : "text-muted"}`}
            >
              Desde 2015, La Buena Mesa ha sido el hogar de los amantes de la
              buena cocina en Buenos Aires. Combinamos la tradición mediterránea
              con técnicas modernas para crear experiencias gastronómicas
              únicas.
            </p>

            <p
              className={`fs-5 mb-4 ${darkMode ? "text-light" : "text-muted"}`}
            >
              Nuestro chef, con más de 20 años de experiencia internacional,
              selecciona personalmente cada ingrediente para garantizar la
              máxima calidad en cada plato.
            </p>

            <div className="d-flex flex-wrap gap-4 mt-4">
              <div className="d-flex align-items-center gap-2">
                <Users size={40} className="text-warning" />
                <div>
                  <p
                    className={`fw-bold mb-0 ${
                      darkMode ? "text-white" : "text-dark"
                    }`}
                  >
                    70+
                  </p>
                  <p
                    className={`small mb-0 ${
                      darkMode ? "text-light" : "text-muted"
                    }`}
                  >
                    Capacidad
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <ChefHat size={40} className="text-warning" />
                <div>
                  <p
                    className={`fw-bold mb-0 ${
                      darkMode ? "text-white" : "text-dark"
                    }`}
                  >
                    8 años
                  </p>
                  <p
                    className={`small mb-0 ${
                      darkMode ? "text-light" : "text-muted"
                    }`}
                  >
                    De Experiencia
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <Wine size={40} className="text-warning" />
                <div>
                  <p
                    className={`fw-bold mb-0 ${
                      darkMode ? "text-white" : "text-dark"
                    }`}
                  >
                    100+
                  </p>
                  <p
                    className={`small mb-0 ${
                      darkMode ? "text-light" : "text-muted"
                    }`}
                  >
                    Vinos Selectos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- IMAGEN CON TILT3D ---------------- */}
          <div
            className="col-md-6 position-relative"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <Tilt3D intensity={15} glareIntensity={0.2}>
              <img
                src={paellaImg}
                alt="Paella Valenciana"
                className="img-fluid rounded-4 w-100 shadow-lg"
                style={{
                  boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
                  borderRadius: "20px",
                  transition: "box-shadow 0.3s ease",
                }}
              />
            </Tilt3D>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
