import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import StarterSection from "./components/StarterSection";
import MainCourseSection from "./components/MainCourseSection";
import DessertSection from "./components/DessertSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ChatModal from "./components/ChatModal";

import useChat from "./hooks/useChat";

const RestaurantLanding = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  const chat = useChat();

  // Guardar dark mode cuando cambie
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
      mirror: false,
    });
  }, []);

  // Scroll suave
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <NavBar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        scrollToSection={scrollToSection}
      />

      <HeroSection darkMode={darkMode} />
      <AboutSection darkMode={darkMode} />
      <StarterSection darkMode={darkMode} />
      <MainCourseSection darkMode={darkMode} />
      <DessertSection darkMode={darkMode} />
      <GallerySection darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />
      <Footer
        darkMode={darkMode}
        chat={chat}
        scrollToSecti
        n={scrollToSection}
      />
      <ChatModal darkMode={darkMode} />
    </div>
  );
};

export default RestaurantLanding;
