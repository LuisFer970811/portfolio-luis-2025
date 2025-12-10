// src/components/ChatWidget.jsx
import { useState } from "react";

const N8N_WEBHOOK_URL = "http://localhost:5678/webhook-test/portfolio-lead";

function getBotReply(message) {
  const text = message.toLowerCase();

  if (text.includes("servicio") || text.includes("servicios")) {
    return (
      "Puedo ayudarte con dashboards en Power BI, reporting automatizado " +
      "con SQL / Python / n8n y arquitectura ligera de datos para seguros y finanzas. " +
      "Si quieres detalles, dime por ejemplo: 'cuéntame de dashboards' o 'automatización'."
    );
  }

  if (text.includes("dashboard")) {
    return (
      "Diseño dashboards ejecutivos y operativos en Power BI: KPIs claros, modelos DAX, " +
      "segmentación de cartera y vistas para dirección y equipos comerciales."
    );
  }

  if (text.includes("automatiz") || text.includes("n8n")) {
    return (
      "Uso n8n, Power Query y Python para automatizar cargas de datos, generar informes " +
      "recurrentes y conectar fuentes como Excel, SQL, APIs o CRMs."
    );
  }

  if (text.includes("stack") || text.includes("tecnolog")) {
    return (
      "Trabajo con Power BI / DAX, SQL Server, R & RStudio, Python, n8n, Excel avanzado " +
      "y Git/GitHub. Mi enfoque es combinar analítica + negocio."
    );
  }

  if (
    text.includes("contact") ||
    text.includes("hablar") ||
    text.includes("whatsapp")
  ) {
    return (
      "Puedes contactarme por email (luis.fernandop081997@gmail.com), " +
      "LinkedIn o WhatsApp. En la sección de Contacto tienes todos los enlaces."
    );
  }

  if (text.includes("seguro") || text.includes("asegur")) {
    return (
      "Tengo experiencia en el sector asegurador: reporting técnico, siniestralidad, " +
      "renovaciones y análisis de cartera para apoyar decisiones de negocio."
    );
  }

  return (
    "Soy un bot de tu portafolio 😊. Puedo contarte sobre mis servicios, dashboards, " +
    "automatización, stack tecnológico o experiencia en seguros y finanzas. " +
    "Prueba escribir por ejemplo: '¿qué servicios ofreces?' o 'háblame de automatización'."
  );
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("chat"); // "chat" | "contact"
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text:
       "Soy el asistente de Luis.\n\n" +
"¿Sobre qué te gustaría hablar?\n\n" +
"Puedo ayudarte con:\n" +
"• Servicios de datos\n" +
"• Dashboards\n" +
"• Automatización\n" +
"• Proyectos relacionados con seguros\n\n" +
"Si deseas que Luis te contacte personalmente,\n" +
"usa el botón \"💼 Dejar mis datos\"."

,
    },
  ]);

  // formulario de contacto
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
    context: "widget-contacto",
    origin: "portfolio-bot",
  });
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSendChat = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { from: "user", text: trimmed };
    const botMessage = { from: "bot", text: getBotReply(trimmed) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  const handleChangeContact = (field, value) => {
    setContact((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmitContact = async (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email || !contact.message) return;

    setSending(true);
    setFeedback("");

    try {
      await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });

      setFeedback("✅ Gracias, he recibido tus datos. Te escribiré pronto.");
      setContact({
        name: "",
        email: "",
        message: "",
        context: "widget-contacto",
        origin: "portfolio-bot",
      });
      setMode("chat");
    } catch (err) {
      console.error(err);
      setFeedback("❌ Hubo un problema al enviar. Intenta de nuevo más tarde.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        className="chat-launcher"
        onClick={() => setIsOpen((open) => !open)}
      >
        💬
      </button>

      {/* Panel del chat */}
      {isOpen && (
        <div className="chat-widget">
          <div className="chat-header">
            <div>
              <p className="chat-title">Asistente de datos</p>
              <p className="chat-subtitle">Luis Ayala · Portafolio</p>
            </div>
            <button className="chat-close" onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>

          <div className="chat-body">
            {mode === "chat" && (
              <>
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={
                      msg.from === "user"
                        ? "chat-bubble chat-bubble-user"
                        : "chat-bubble chat-bubble-bot"
                    }
                  >
                    {msg.text}
                  </div>
                ))}
              </>
            )}

            {mode === "contact" && (
              <form className="chat-contact-form" onSubmit={handleSubmitContact}>
                <input
                  type="text"
                  className="chat-input"
                  placeholder="Tu nombre"
                  value={contact.name}
                  onChange={(e) =>
                    handleChangeContact("name", e.target.value)
                  }
                />
                <input
                  type="email"
                  className="chat-input"
                  placeholder="Tu email"
                  value={contact.email}
                  onChange={(e) =>
                    handleChangeContact("email", e.target.value)
                  }
                />
                <textarea
                  rows={3}
                  className="chat-input chat-textarea"
                  placeholder="Cuéntame brevemente qué necesitas..."
                  value={contact.message}
                  onChange={(e) =>
                    handleChangeContact("message", e.target.value)
                  }
                />
                <div className="chat-contact-actions">
                  <button
                    type="button"
                    className="chat-secondary"
                    onClick={() => {
                      setMode("chat");
                      setFeedback("");
                    }}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="chat-send"
                    disabled={
                      sending ||
                      !contact.name ||
                      !contact.email ||
                      !contact.message
                    }
                  >
                    {sending ? "Enviando..." : "Enviar"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* CTA y caja de texto del chat normal */}
          {mode === "chat" && (
            <>
              <button
                className="chat-cta"
                type="button"
                onClick={() => {
                  setMode("contact");
                  setFeedback("");
                }}
              >
                📩 Deja tus datos y nos contactamos contigo
              </button>

              <form className="chat-input-row" onSubmit={handleSendChat}>
                <input
                  type="text"
                  placeholder="Escribe tu pregunta..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="chat-input"
                />
                <button type="submit" className="chat-send">
                  ➤
                </button>
              </form>
            </>
          )}

          {feedback && <p className="chat-feedback">{feedback}</p>}
        </div>
      )}
    </>
  );
}
