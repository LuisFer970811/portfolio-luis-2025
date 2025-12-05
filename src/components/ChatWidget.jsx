import { useState } from "react";

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

  if (text.includes("contact") || text.includes("hablar") || text.includes("whatsapp")) {
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
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text:
        "Hola 👋 Soy el asistente de Luis. ¿Sobre qué te gustaría saber? " +
        "Servicios, dashboards, automatización, experiencia o contacto.",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { from: "user", text: trimmed };
    const botMessage = { from: "bot", text: getBotReply(trimmed) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
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
          </div>

          <form className="chat-input-row" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Escribe tu pregunta..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="chat-input"
            />
            <button type="submit" className="chat-send">➤</button>
          </form>
        </div>
      )}
    </>
  );
}
