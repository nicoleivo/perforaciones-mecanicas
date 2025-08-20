import { useState } from "react";
import { scroller } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../assets/logo.svg";
import "./Header.css";

export default function Header({ toggleSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (section, expandSection) => {
    setMenuOpen(false);
    scroller.scrollTo(section, {
      smooth: true,
      offset: -80,
      duration: 500,
    });
    if (expandSection) toggleSection(expandSection);
  };

  return (
    <header className="header" role="navigation" aria-label="Menú principal">
      <button
        className="menu-toggle"
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      <nav
        className={`nav-menu ${menuOpen ? "active" : ""}`}
        aria-label="Navegación principal"
      >
        <button
          className="nav-link"
          onClick={() => scrollToSection("hero", "hero")}
        >
          INICIO
        </button>
        <button
          className="nav-link"
          onClick={() => scrollToSection("about", "about")}
        >
          QUIÉNES SOMOS
        </button>
        <button
          className="nav-link"
          onClick={() => scrollToSection("services", "services")}
        >
          QUÉ HACEMOS
        </button>
        <button
          className="nav-link"
          onClick={() => scrollToSection("contact", "contact")}
        >
          CONTACTO
        </button>
      </nav>
    </header>
  );
}
