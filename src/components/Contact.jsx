// src/components/Contact.jsx
function Contact() {
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
                href="https://wa.me/593984123456" // CAMBIA POR TU NÚMERO REAL
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
            Este formulario envía tus datos a mi flujo en n8n, donde se guardan
            en Google Sheets.
          </p>

          <form
            className="contact-form"
            method="POST"
            action="http://localhost:5678/webhook-test/portfolio-lead"
          >
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
                name="context"
                className="contact-input"
                defaultValue="consultoria-datos"
              >
                <option value="consultoria-datos">
                  Consultoría de datos / dashboards
                </option>
                <option value="automatizacion-n8n">
                  Automatización con n8n / procesos
                </option>
                <option value="seguros-broker">
                  Proyectos para seguros / broker
                </option>
                <option value="otro">Otro tema</option>
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

            <button type="submit" className="contact-submit">
              Enviar mensaje
            </button>

            <p className="contact-helper">
              También puedes escribirme directamente por email o LinkedIn.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
