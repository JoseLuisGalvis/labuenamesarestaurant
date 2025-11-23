import React, { useState } from "react";
import { MapPin, Clock, Phone, Mail, Send, Map } from "lucide-react";

const ContactSection = ({ darkMode }) => {
  const [showMap, setShowMap] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado – te responderemos en breve.");
  };

  return (
    <section
      id="contact"
      className={`py-6 py-lg-7 ${darkMode ? "bg-dark text-white" : "bg-light"}`}
      data-aos="fade-up"
    >
      <div className="container min-vh-100 d-flex justify-content-center align-items-center px-3">
        <div className="row w-100 g-4">
          {/* Columna izquierda – Datos + Botón Mapa */}
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <h2 className="fw-bold mb-4">Contacto</h2>

            <div className="d-flex align-items-start mb-3">
              <MapPin className="flex-shrink-0 me-3 text-amber-400" size={22} />
              <div>
                <div className="fw-semibold">Dirección</div>
                <div className={darkMode ? "text-stone-300" : "text-muted"}>
                  Av. Libertador 1234, Buenos Aires, Argentina
                </div>
                {/* Botón que abre el modal */}
                <button
                  className="btn btn-sm btn-warning text-white mt-2 d-inline-flex align-items-center gap-2"
                  onClick={() => setShowMap(true)}
                >
                  <Map size={16} />
                  Ver Mapa
                </button>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <Clock className="flex-shrink-0 me-3 text-amber-400" size={22} />
              <div>
                <div className="fw-semibold">Horarios</div>
                <div className={darkMode ? "text-stone-300" : "text-muted"}>
                  Almuerzo: Mar-Dom 12:00-16:00
                  <br />
                  Cena: Mar-Dom 20:00-00:00
                  <br />
                  <small>Cerrado los lunes</small>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-start mb-3">
              <Phone className="flex-shrink-0 me-3 text-amber-400" size={22} />
              <div>
                <div className="fw-semibold">Teléfono</div>
                <a href="tel:+541145678900" className="text-decoration-none">
                  +54 11 4567-8900
                </a>
              </div>
            </div>

            <div className="d-flex align-items-start mb-4">
              <Mail className="flex-shrink-0 me-3 text-amber-400" size={22} />
              <div>
                <div className="fw-semibold">Email</div>
                <a
                  href="mailto:info@labuenamesa.com.ar"
                  className="text-decoration-none"
                >
                  info@labuenamesa.com.ar
                </a>
              </div>
            </div>
          </div>

          {/* Columna derecha – Formulario */}
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-left">
            <h3 className="fw-bold mb-4">Escríbenos</h3>
            <form
              onSubmit={handleSubmit}
              className="needs-validation"
              noValidate
            >
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className={`form-control ${
                    darkMode ? "bg-dark text-white" : ""
                  }`}
                  required
                />
                <div className="invalid-feedback">
                  Por favor ingresa tu nombre.
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${
                    darkMode ? "bg-dark text-white" : ""
                  }`}
                  required
                />
                <div className="invalid-feedback">Ingresa un email válido.</div>
              </div>

              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea
                  className={`form-control ${
                    darkMode ? "bg-dark text-white" : ""
                  }`}
                  rows={4}
                  required
                />
                <div className="invalid-feedback">Cuéntanos algo.</div>
              </div>

              <button
                type="submit"
                className="btn btn-warning text-white btn-lg px-4 d-inline-flex align-items-center gap-2"
              >
                <Send size={18} />
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal de Mapa */}
      <div
        className={`modal fade ${showMap ? "show d-block" : ""}`}
        tabIndex={-1}
        style={{ backgroundColor: "rgba(0,0,0,.45)" }}
        onClick={() => setShowMap(false)}
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div
            className={`modal-content ${darkMode ? "bg-dark text-white" : ""}`}
          >
            <div className="modal-header border-0">
              <h5 className="modal-title">Ubicación</h5>
              <button
                type="button"
                className={`btn-close ${darkMode ? "btn-close-white" : ""}`}
                onClick={() => setShowMap(false)}
              />
            </div>
            <div className="modal-body p-0">
              <div className="ratio ratio-16x9">
                <iframe
                  title="Ubicación"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.688491127886!2d-58.381775!3d-34.603722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzEzLjQiUyA1OMKwMjInNTQuNCJX!5e0!3m2!1ses!2sar!4v1234567890"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
