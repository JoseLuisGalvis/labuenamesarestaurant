import React, { useEffect } from "react";
import { ChefHat, Moon, Sun } from "lucide-react";

const NavBar = ({ darkMode, setDarkMode }) => {
  // Guardar modo oscuro en localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <nav
      className={`navbar navbar-expand-md fixed-top shadow-sm ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-white"
      }`}
      style={{ backdropFilter: "blur(4px)" }}
    >
      <div className="container">
        {/* Brand */}
        <a
          className="navbar-brand d-flex align-items-center gap-2"
          href="#hero"
        >
          <ChefHat className="text-amber-600" />
          <span className="fw-bold fs-4">La Buena Mesa</span>
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu colapsable */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-md-3">
            <li className="nav-item">
              <a className="nav-link" href="#hero">
                Inicio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                Nosotros
              </a>
            </li>

            {/* Dropdown Menú */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#menu"
                id="menuDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Menú
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#starters">
                    Entradas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#maincourse">
                    Plato Principal
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#desserts">
                    Postres
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#gallery">
                Galería
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contacto
              </a>
            </li>
          </ul>

          {/* DARK MODE SWITCH */}
          <div className="d-flex align-items-center ms-md-3">
            <span className="me-2">{darkMode ? <Moon /> : <Sun />}</span>

            <div
              className="form-check form-switch"
              style={{ paddingLeft: "2.5rem" }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                id="darkModeSwitch"
              />
              <label className="form-check-label" htmlFor="darkModeSwitch">
                {darkMode ? "Oscuro" : "Claro"}
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
