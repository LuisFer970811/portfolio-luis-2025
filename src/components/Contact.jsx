export default function Contact() {
  return (
    <section id="contacto" className="section">
      <div className="container contact-grid">
        {/* =====================
            COLUMNA IZQUIERDA
        ====================== */}
        <div>
          <p className="kicker">CONTACTO</p>
          <h2 className="section-title">Hablemos</h2>

          <p className="section-copy">
            ¿Quieres revisar un dashboard, automatizar un proceso o simplemente
            conversar sobre datos? Estoy abierto a colaborar en proyectos
            freelance, roles full-time o iniciativas académicas.
          </p>

          <ul className="contact-list">
            <li>
              📧{" "}
              <a href="mailto:luis.fernandop081997@gmail.com">
                luis.fernandop081997@gmail.com
              </a>
            </li>
            <li>
              💼{" "}
              <a
                href="https://www.linkedin.com/in/luisfernandoayala"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              🧑‍💻{" "}
              <a
                href="https://github.com/LuisFer970811"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              💬{" "}
              <a
                href="https://wa.link/ltvczq"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>

          <p className="section-copy" style={{ marginTop: "1rem" }}>
            Si deseas que te contacte personalmente, usa el botón{" "}
            <strong>“📩 Dejar mis datos”</strong> en el chat flotante.
          </p>
        </div>

        {/* =====================
            COLUMNA DERECHA
        ====================== */}
        <div className="contact-card">
          <h3 className="contact-card-title">¿Cómo contactarme?</h3>

          <p className="contact-card-text">
            Puedes escribirme directamente por email, LinkedIn o WhatsApp.
          </p>

          <p className="contact-card-text" style={{ marginTop: "0.75rem" }}>
            👉 Si prefieres que yo te contacte, usa el{" "}
            <strong>chat flotante</strong> y deja tus datos ahí.  
            Tu mensaje se guardará automáticamente.
          </p>
        </div>
      </div>
    </section>
  );
}
