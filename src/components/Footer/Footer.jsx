import { FaWhatsapp, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer
      className="footer"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <div className="footer-content">
        <div
          className="footer-item"
          itemProp="contactPoint"
          itemScope
          itemType="https://schema.org/ContactPoint"
        >
          <FaWhatsapp className="footer-icon" />
          <h3>WhatsApp</h3>
          <p itemProp="telephone">(011) 15 6097 7811</p>
          <p>
            <a href="mailto:cucchiettisergio@gmail.com" itemProp="email">
              cucchiettisergio@gmail.com
            </a>
          </p>
        </div>

        <div
          className="footer-item"
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <FaMapMarkerAlt className="footer-icon" />
          <h3>Dirección</h3>
          <p>
            <span itemProp="streetAddress">Felix Delatte 105</span>,
            <br />
            <span itemProp="addressLocality">Villa Tesei</span>,
            <span itemProp="addressRegion"> Buenos Aires</span>
          </p>
        </div>

        <div className="footer-item">
          <FaClock className="footer-icon" />
          <h3>Horario</h3>
          <p itemProp="openingHours">
            Lunes a Viernes
            <br />
            08:00 - 18:00 hs
          </p>
        </div>
      </div>

      <div className="copyright">
        <p>
          Copyright © {new Date().getFullYear()} |{" "}
          <div className="legal-links">
            <a href="/aviso-legal">Aviso Legal</a> |<span> </span>
            <a href="/politica-privacidad">Política de Privacidad</a>
          </div>
        </p>
      </div>
    </footer>
  );
}
