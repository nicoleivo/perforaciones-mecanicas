// src/components/About/About.jsx
import React, { useState } from "react";
import Lightbox from "../Lightbox/Lightbox";
import image1 from "../../assets/IMG_0559.webp";
import image2 from "../../assets/photo-2.webp";
import image3 from "../../assets/photo-1.webp";
import "./About.css";

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const images = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
  };

  const companyReferences = [
    "Rowing SA",
    "Neltec SRL",
    "Leveltec SA",
    "Bepanor SA",
    "Lubrisider SRL",
    "Pose SA",
    "SADE SA",
    "Argencobra SA",
    "ESYME SRL",
    "Luminitec SA",
    "Kioshi SA",
    "SEGBA",
    "SELF Ingenieria Electrica SRL",
    "SYE Constructora SA",
    "Algema",
    "Compañia de montaje",
    "EMA Servicios",
    "Nueva Constitución",
    "Radiotronica",
    "SIBA SA",
    "Cataluña Servicios y Construcciones SRL",
    "Barrios Privados y Particulares",
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-intro">
        <h2>QUIÉNES SOMOS</h2>
        <p>
          Nuestra empresa cumple 33 años, contamos con personal de experiencia y
          disposición al servicio. Durante este tiempo hemos realizado
          perforaciones para cámaras subterráneas, plataformas, fosas de empalme
          y subestaciones.
        </p>
      </div>

      <div className="about-content-container">
        <div className="about-content">
          <div className="company-history">
            <h3>35 Años de Experiencia</h3>
            <div className="media-gallery">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className="gallery-item"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={`Proyecto de perforación ${
                      index + 1
                    } realizado por Perforaciones Cucchietti`}
                    className="gallery-image"
                    loading={index > 0 ? "lazy" : "eager"}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="company-references">
            <h2>Empresas que han confiado en nosotros</h2>
            <p className="references-description">
              Durante nuestros 35 años de experiencia, hemos trabajado con
              numerosas empresas líderes en la industria, incluyendo:
            </p>
            <div className="references-grid">
              {companyReferences.map((company, index) => (
                <div key={index} className="reference-item">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {currentImageIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={currentImageIndex}
          onClose={() => setCurrentImageIndex(null)}
          setCurrentIndex={setCurrentImageIndex}
        />
      )}
    </section>
  );
}
