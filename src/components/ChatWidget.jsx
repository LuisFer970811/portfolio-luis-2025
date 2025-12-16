import { useState } from "react";

/* 🔗 URL de tu Web App de Google Apps Script (termina en /exec) */
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwGKX84a3nP0kDZZOHkb75E9VOUw1A3ESKYdPooIqyXq1_R9R6Cdt-mYV2_4XPIQ6mK/exec";

function getBotReply(message) {
  const text = message.toLowerCase();

  if (text.includes("servicio") || text.includes("servicios")) {
    return (
      "Puedo ayudarte con:\n" +
      "• Dashboards en Power BI\n" +
      "• Reporting automatizado (SQL / R / Python)\n" +
      "• Automatización de procesos (n8n / Power Query)\n" +
      "• Arquitectura ligera de datos (seguros y finanzas)\n\n" +
      "Si quieres, dime: “dashboards”, “automatización” o “seguros”."
    );
  }

  if (text.includes("dashboard")) {
    return (
      "Diseño dashboards ejecutivos y operativos en Power BI:\n" +
      "• KPIs claros\n" +
      "• Modelos DAX\n" +
      "• Segmentación por cartera/canal/zona\n" +
      "• Vistas para dirección y equipos comerciales"
    );
  }

  if (text.includes("automatiz") || text.includes("n8n")) {
    return (
      "Automatizo procesos y reporting con:\n" +
      "• n8n\n" +
      "• Power Query\n" +
      "• Python\n\n" +
      "Conectando Excel / SQL / APIs y generando reportes recurrentes."
    );
  }

  if (text.includes("sql") || text.includes("datamart") || text.includes("modelo")) {
    return (
      "Puedo ayudarte con integración y modelado de datos:\n" +
      "• SQL / Datamarts ligeros\n" +
      "• Limpieza y estandarización\n" +
      "• Tablas de hechos/dimensiones\n" +
      "• Base lista para Power BI"
    );
  }

  if (text.includes("stack") || text.includes("tecnolog") || text.includes("herramient")) {
    return (
      "Stack principal:\n" +
      "• Power BI / DAX\n" +
      "• SQL Server\n" +
      "• R & RStudio\n" +
      "• Python\n" +
      "• n8n\n" +
      "• Excel avanzado\n" +
      "• Git/GitHub\n\n" +
      "Mi enfoque: analítica + negocio (sin humo)."
    );
  }

  if (text.includes("contact") || text.includes("hablar") || text.includes("whatsapp")) {
    return (
      "Puedes contactarme por:\n" +
      "• Email: luis.fernandop081997@gmail.com\n" +
      "• LinkedIn\n" +
      "• WhatsApp\n\n" +
      "Si quieres, usa el botón “📩 Dejar mis datos” aquí mismo."
    );
  }

  if (text.includes("seguro") || text.includes("asegur") || text.includes("broker")) {
    return (
      "Tengo experiencia en seguros y finanzas:\n" +
      "• Reporting técnico\n" +
      "• Siniestralidad\n" +
      "• Renovaciones\n" +
      "• Análisis de cartera y KPIs\n\n" +
      "Si me dices tu caso, te orientaré."
    );
  }

  return (
    "Puedo ayudarte con servicios, dashboards, automatización o seguros.\n\n" +
    "Escribe por ejemplo:\n" +
    "• “¿qué servicios ofreces?”\n" +
    "• “háblame de dashboards”\n" +
    "• “quiero automatizar un reporte”\n\n" +
    "Si quieres que Luis te contacte, usa “📩 Dejar mis datos”."
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
        "Hola 👋\n" +
        "Soy el asistente de Luis.\n\n" +
        "¿Sobre qué te gustaría hablar?\n" +
        "• Servicios\n" +
        "• Dashboards\n" +
        "• Automatización\n" +
        "• Seguros / finanzas\n\n" +
        "Si deseas que Luis te contacte personalmente,\n" +
        "usa el botón “📩 Dejar mis datos”.",
    },
  ]);

  // formulario del widget
  const [contact, setContact] = useState({
    name: "",
    email: "",
    helpType: "analisis-datos",
    message: "",
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

    // 👉 envío como FORM URLENCODED (Apps Script lo lee con e.parameter)
    const params = new URLSearchParams({
      name: contact.name,
      email: contact.email,
      helpType: contact.helpType,
      message: contact.message,
      origin: "portfolio-bot",
    });

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: params,
      });

      setFeedback("✅ Listo. Recibí tus datos y Luis te contactará pronto.");
      setContact({
        name: "",
        email: "",
        helpType: "analisis-datos",
        message: "",
      });
      setMode("chat");
    } catch (err) {
      console.error(err);
      setFeedback("❌ Hubo un problema al enviar. Intenta más tarde.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <button className="chat-launcher" onClick={() => setIsOpen((o) => !o)}>
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
                    style={{ whiteSpace: "pre-line" }} // ✅ respeta \n
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
                  onChange={(e) => handleChangeContact("name", e.target.value)}
                />

                <input
                  type="email"
                  className="chat-input"
                  placeholder="Tu email"
                  value={contact.email}
                  onChange={(e) => handleChangeContact("email", e.target.value)}
                />

                <select
                  className="chat-input"
                  value={contact.helpType}
                  onChange={(e) => handleChangeContact("helpType", e.target.value)}
                >
                  <option value="analisis-datos">
                    1 · Análisis de datos y toma de decisiones
                  </option>
                  <option value="dashboards">
                    2 · Dashboards y visualización (Power BI / R / Python)
                  </option>
                  <option value="automatizacion">
                    3 · Automatización de procesos (n8n / Python / Power Query)
                  </option>
                  <option value="herramientas">
                    4 · Uso de herramientas (Power BI, SQL, R, Python)
                  </option>
                  <option value="seguros">
                    5 · Proyectos para seguros / broker
                  </option>
                  <option value="otro">6 · Otro tema</option>
                </select>

                <textarea
                  rows={3}
                  className="chat-input chat-textarea"
                  placeholder="Cuéntame brevemente qué necesitas..."
                  value={contact.message}
                  onChange={(e) => handleChangeContact("message", e.target.value)}
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
                      sending || !contact.name || !contact.email || !contact.message
                    }
                  >
                    {sending ? "Enviando..." : "Enviar"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* CTA + input del chat */}
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
                📩 Dejar mis datos
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
