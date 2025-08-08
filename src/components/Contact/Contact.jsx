import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/myzepqek", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError("Error al enviar el mensaje. Intente nuevamente.");
      }
    } catch (err) {
      setError("Error de conexión. Verifique su red.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contactanos</h2>
      {success && (
        <div className="alert success">¡Consulta enviada con éxito!</div>
      )}
      {error && <div className="alert error">{error}</div>}

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Nombre completo"
          pattern="[A-Za-záéíóúÁÉÍÓÚñÑ\s]{3,50}"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="tel"
          placeholder="Teléfono"
          pattern="[0-9]{7,15}"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
        <textarea
          placeholder="Describe tu consulta"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows="4"
          required
        />
        <button
          type="submit"
          className="cta-button" // Add this class
          disabled={submitting}
        >
          {submitting ? "Enviando..." : "Enviar consulta"}
        </button>
      </form>
    </section>
  );
}
