import "./Hero.css";
import image1 from "../../assets/photo-5.webp";

export default function Hero() {
  return (
    <div id="hero" className="hero-container">
      <div className="hero-image-container">
        <img
          src={image1}
          alt="Perforaciones mecánicas profesionales en Buenos Aires y CABA"
          className="hero-image"
        />
        <div className="hero-text-overlay">
          <h1 className="hero-title">PERFORACIONES CUCCHIETTI</h1>
          <h2 className="hero-subtitle">
            PERFORACIÓN PARA COLOCACIÓN DE CABLE Y ELECTRODO, MEDICIÓN Y
            CERTIFICACIÓN DE PUESTA TIERRA
          </h2>
        </div>
      </div>
    </div>
  );
}
