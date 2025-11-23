import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import recepcionImg from "../assets/images/recepcion.jpeg";
import salonImg from "../assets/images/salon.jpeg";
import barImg from "../assets/images/bar.jpeg";
import dulceriaImg from "../assets/images/dulceria.jpeg";
import terrazaImg from "../assets/images/terraza.jpeg";
import vipImg from "../assets/images/vip.jpeg";

const galleryItems = [
  { title: "Entrada / Recepción", img: recepcionImg },
  { title: "Salón Principal", img: salonImg },
  { title: "Bar", img: barImg },
  { title: "Dulcería / Postres", img: dulceriaImg },
  { title: "Terraza / Patio", img: terrazaImg },
  { title: "Salón VIP", img: vipImg },
];

const GallerySection = ({ darkMode }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleOpen = (item) => {
    setActiveItem(item);
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);

  return (
    <section
      id="gallery"
      className={`py-5 ${
        darkMode ? "bg-dark text-light" : "bg-white text-dark"
      }`}
    >
      <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center px-4">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-4 fw-bold mb-3">Ambientes</h2>
          <p className="fs-5">
            Descubrí los espacios más destacados de nuestro restaurante
          </p>
        </div>

        <div className="row g-4">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="col-12 col-md-6 col-lg-4"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div
                className="position-relative overflow-hidden rounded-3 shadow-sm"
                style={{ cursor: "pointer", height: "300px" }}
                onClick={() => handleOpen(item)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-100 h-100 object-fit-cover"
                  style={{
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                  style={{
                    background: "rgba(0,0,0,0.3)",
                    opacity: 0,
                    color: "#fff",
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                >
                  <h5 className="text-center px-2">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        <Modal show={showModal} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{activeItem?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {activeItem && (
              <img
                src={activeItem.img}
                alt={activeItem.title}
                className="w-100 rounded"
              />
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
};

export default GallerySection;
