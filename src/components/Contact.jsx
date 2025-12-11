// src/components/Contact.jsx
import { useState } from "react";

// 👉 Pega AQUÍ tu URL del desplegable de Apps Script (la que termina en /exec)
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfyc.../exec";

function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg("");
    setIsSending(true);

    const form = e.target;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      helpType: formData.get("helpType"), // 👈 nombre alineado con tu Apps Script
      message: formData.get("message"),
      origin: "contact-section",
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setStatusMsg("Gracias, he recibido tu mensaje. Te responderé en breve.");
      form.reset();
    } catch (error) {
      console.error("Error enviando el formulario:", error);
      setStatusMsg(
        "Hubo un problema al enviar el formulario. Puedes escribirme por email o LinkedIn."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contacto" className="section">
      <div className="container contact-grid">
        {/* COLUMNA IZQUIERDA */}
        <div>
          <p className="kicker">CONTACTO</p>
          <h2 className="section-title">Hablemos</h2>

          <p className="section-copy">
            ¿Quieres revisar un dashboard, automatizar un proceso o simplemente
            hablar de ideas con datos? Estoy abierto a colaborar en proyectos
            freelance, roles full-time o iniciativas académicas.
          </p>

          <ul className="contact-list">
            <li>
              <span>📧 Email:</span>{" "}
              <a href="mailto:luis.fernandop081997@gmail.com">
                luis.fernandop081997@gmail.com
              </a>
            </li>
            <li>
              <span>💼 LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/luisfernandoayala"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/luisfernandoayala
              </a>
            </li>
            <li>
              <span>🧑‍💻 GitHub:</span>{" "}
              <a
                href="https://github.com/LuisFer970811"
                target="_blank"
                rel="noreferrer"
              >
                github.com/LuisFer970811
              </a>
            </li>
            <li>
              <span>💬 WhatsApp:</span>{" "}
              <a
                href="https://wa.link/ltvczq"
                target="_blank"
                rel="noreferrer"
              >
                Escríbeme por WhatsApp
              </a>
            </li>
          </ul>

          <p className="section-copy">
            Si crees que puedo aportar en tu equipo o proyecto, estaré encantado
            de escucharte.
          </p>
        </div>

        {/* COLUMNA DERECHA – FORMULARIO */}
        <div className="contact-card">
          <h3 className="contact-card-title">Déjame tus datos</h3>
          <p className="contact-card-text">
            Este formulario guarda tu mensaje en Google Sheets mediante un
            script seguro de Google Apps Script.
          </p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label className="contact-label">
              Nombre
              <input
                type="text"
                name="name"
                className="contact-input"
                required
              />
            </label>

            <label className="contact-label">
              Email
              <input
                type="email"
                name="email"
                className="contact-input"
                required
              />
            </label>

            <label className="contact-label">
              Tipo de ayuda
              <select
                name="helpType"
                className="contact-input"
                defaultValue="consultoria-datos"
              >
                <option value="consultoria-datos">
                  1 · Análisis de datos / dashboards
                </option>
                <option value="automatizacion-procesos">
                  2 · Automatización de reporting / procesos
                </option>
                <option value="herramientas-stack">
                  3 · Uso de herramientas (Power BI, SQL, R, Python, n8n)
                </option>
                <option value="seguros-broker">
                  4 · Proyectos para seguros / broker
                </option>
                <option value="otro">5 · Otro tema</option>
              </select>
            </label>

            <label className="contact-label">
              Mensaje
              <textarea
                name="message"
                className="contact-textarea"
                rows={4}
                placeholder="Cuéntame brevemente qué necesitas..."
                required
              />
            </label>

            <input type="hidden" name="origin" value="contact-section" />

            <button type="submit" className="contact-submit" disabled={isSending}>
              {isSending ? "Enviando..." : "Enviar mensaje"}
            </button>

            <p className="contact-helper">
              También puedes escribirme directamente por email o LinkedIn.
            </p>

            {statusMsg && (
              <p className="contact-helper" style={{ marginTop: "0.35rem" }}>
                {statusMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
