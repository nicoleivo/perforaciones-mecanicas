import { useNavigate } from "react-router-dom";
import "./AboutDetails.css";

export default function AboutDetails() {
  const navigate = useNavigate();

  // List of company references
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
    <div className="about-details">
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Volver
      </button>

      <h1>QUIENES SOMOS</h1>

      <section className="company-history">
        <h2>35 Años de Experiencia</h2>
        <div className="media-grid">
          <img src="/assets/IMG_0559.HEIC" alt="Equipo especializado" />
          <img src="/assets/proyecto-2.jpg" alt="Proyecto de perforación" />
          <img src="/assets/proyecto-3.jpg" alt="Maquinaria profesional" />
        </div>
      </section>

      <section className="company-references">
        <h2>Empresas que han confiado en nosotros</h2>
        <div className="references-grid">
          {companyReferences.map((company, index) => (
            <div key={index} className="company-name">
              {company}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
