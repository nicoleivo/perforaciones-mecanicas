import "./Services.css";

export default function Services({ expanded, toggleExpand }) {
  return (
    <section id="services" className="service-section">
      <div className="service-content">
        <h2>QUÉ HACEMOS</h2>
        <p>
          Somos una PYME dedicada a realizar perforaciones para colocación de
          electrodo, soldadura de cable y electrodo, y medición de puesta a
          tierra con telurímetro certificado <b>NORMA ISO 17025</b>. <br />
          <br />
          <strong>Únicos perforadores homologados de todo el país</strong>.
        </p>
      </div>
    </section>
  );
}
