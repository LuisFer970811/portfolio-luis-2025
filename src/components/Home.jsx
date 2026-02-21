// src/components/Home.jsx
import { Link } from "react-router-dom";
import miFoto from "../assets/luis.ayala.jpg";
import { useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwGKX84a3nP0kDZZOHkb75E9VOUw1A3ESKYdPooIqyXq1_R9R6Cdt-mYV2_4XPIQ6mK/exec";

export default function Home() {
  const [isSending, setIsSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // evita redirección
    setIsSending(true);
    setStatusMsg("");

    const form = e.target;
    const formData = new FormData(form);

    // Enviamos como x-www-form-urlencoded (Apps Script lo lee con e.parameter)
    const params = new URLSearchParams({
      name: formData.get("name") || "",
      email: formData.get("email") || "",
      helpType: formData.get("helpType") || "",
      message: formData.get("message") || "",
      origin: "home-contact-form",
    });

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: params,
      });

      setStatusMsg("✅ Enviado. Revisaré tu mensaje y te responderé pronto.");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatusMsg("❌ No se pudo enviar. Intenta más tarde.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="page">
      {/* TOPBAR */}
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">
            <span className="brand-name">Luis Ayala</span>
            <span className="brand-tag">Data · Analytics · Automation</span>
          </div>

          <nav className="nav">
            <a href="#inicio" className="active">
              Inicio
            </a>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#formacion">Formación</a>
            <a href="#proyectos">Proyectos</a>
            <Link to="/servicios" className="nav-link">
              Servicios
            </Link>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        {/* =======================
            HERO · PORTAFOLIO
        ======================== */}
        <section id="inicio" className="hero">
          <div className="container hero-inner">
            {/* Columna izquierda */}
            <div>
              <p className="section-kicker">DATA PORTFOLIO</p>

              <h1 className="hero-title">
                Portafolio de <span className="hero-highlight">Luis Ayala</span>{" "}
                🚀
              </h1>

              <p className="hero-subtitle">
                Economista y analista de datos con experiencia en{" "}
                <strong>Power BI, SQL Server, R, Python y automatización</strong>.
                Combino reporting ejecutivo, automatización ligera y storytelling
                con datos para que los equipos de negocio tomen decisiones sin ruido.
              </p>

              <p className="hero-tagline">
                Este espacio está pensado como mi{" "}
                <strong>portfolio de datos</strong>: aquí muestro quién soy,
                cómo trabajo y ejemplos reales.{" "}
                <span>
                  Si eres empresa y buscas ayuda con dashboards o automatización,
                  también puedes ver mis servicios.
                </span>
              </p>

              <div className="hero-badges-row">
                <span className="hero-badge">+5 años en seguros & finanzas</span>
                <span className="hero-badge">Dashboards ejecutivos</span>
                <span className="hero-badge">Automatización de reporting</span>
              </div>

              <div className="hero-actions">
                <a href="#proyectos" className="btn-primary">
                  Ver proyectos y dashboards
                </a>
                <Link to="/servicios" className="btn-ghost">
                  Servicios para empresas
                </Link>
              </div>
            </div>

            {/* Columna derecha */}
            <aside className="hero-card">
              <div className="hero-card-title">Resumen rápido</div>

              <div className="hero-pill">
                <span>Disponibilidad</span>
                <span style={{ color: "#4ade80" }}>Abierto a oportunidades</span>
              </div>

              <div className="hero-metrics">
                <div>
                  <div className="hero-metric-label">Stack principal</div>
                  <div className="hero-metric-value">
                    Power BI · SQL Server · R · Python · Automatización
                  </div>
                </div>
                <div>
                  <div className="hero-metric-label">Enfoque</div>
                  <div className="hero-metric-value">
                    Dashboards, reporting automatizado y análisis para negocio
                  </div>
                </div>
              </div>

              <div className="hero-divider" />

              <div className="hero-mini-timeline">
                <div className="hero-timeline-dot" />
                <div className="hero-timeline-text">
                  <p>2021–2025 · Analista de Datos en seguros y servicios financieros.</p>
                  <p>2025–Actualidad · Máster en Análisis y Divulgación de Datos (Madrid).</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* =======================
            SOBRE MÍ
        ======================== */}
        <section id="sobre-mi">
          <div className="container about-layout">
            <p className="section-kicker">Perfil</p>

            <div className="about-content">
              <div className="about-photo-wrapper">
                <img
                  src={miFoto}
                  alt="Luis Ayala - Analista de Datos"
                  className="about-photo"
                />
              </div>

              <div className="about-text">
                <h2 className="section-title">Sobre mí</h2>

                <p className="section-text">
                  Soy <strong>Economista y Analista de Datos</strong> con experiencia
                  en los sectores <strong>asegurador, bancario y financiero</strong>.
                  Me especializo en <strong>Business Intelligence, Power BI, SQL, R</strong>{" "}
                  y automatización de procesos, utilizando los datos para mejorar la
                  toma de decisiones, la eficiencia operativa y la rentabilidad del negocio.
                </p>

                <p className="section-text" style={{ marginTop: "0.75rem" }}>
                  Actualmente curso el{" "}
                  <strong>Máster en Análisis y Divulgación de Datos</strong> en la{" "}
                  <strong>Universidad CEU San Pablo</strong> (Madrid), donde profundizo
                  en visualización avanzada, storytelling con datos y automatización con{" "}
                  <strong>Python</strong>.
                </p>

                <p className="section-text" style={{ marginTop: "0.75rem" }}>
                  Mi trayectoria combina rigurosidad analítica con visión estratégica:
                  he participado en proyectos de{" "}
                  <strong>reporting financiero, modelado estadístico y automatización de flujos</strong>{" "}
                  orientados a conectar los datos con necesidades reales del negocio.
                </p>

                <div className="chips">
                  <span className="chip">Power BI / DAX</span>
                  <span className="chip">SQL Server</span>
                  <span className="chip">R &amp; RStudio</span>
                  <span className="chip">Python</span>
                  <span className="chip">Automatización</span>
                  <span className="chip">Git / GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =======================
            FORMACIÓN Y EXPERIENCIA
        ======================== */}
        <section id="formacion" className="experience-section">
          <div className="container">
            <p className="section-kicker">Trayectoria</p>
            <h2 className="section-title">Formación y experiencia</h2>

            <div className="experience-grid">
              {/* Formación */}
              <article className="experience-card">
                <h3 className="experience-heading">Formación</h3>

                <p className="experience-role">Economista</p>
                <p className="experience-meta">
                  Universidad Central del Ecuador · Quito · 2016–2021
                </p>

                <p className="section-text">
                  Formación sólida en análisis económico, finanzas y estadística aplicada.
                  Extendí estas competencias hacia el <strong>análisis de datos</strong> y{" "}
                  <strong>Business Intelligence</strong>.
                </p>

                <hr style={{ opacity: 0.2, margin: "1rem 0" }} />

                <p className="experience-role">Máster en Análisis y Divulgación de Datos</p>
                <p className="experience-meta">
                  Universidad CEU San Pablo · Madrid · 2025–Actualidad
                </p>

                <p className="section-text">
                  Programa enfocado en analítica avanzada, visualización y storytelling con datos.
                  Trabajo con <strong>Power BI</strong>, <strong>R</strong>, <strong>Python</strong>{" "}
                  y <strong>SQL</strong> para construir informes comprensibles tanto para perfiles
                  técnicos como directivos.
                </p>

                <ul className="experience-list">
                  <li>Modelado y análisis aplicado a datos de negocio.</li>
                  <li>Visualización y narrativa con datos.</li>
                  <li>Reporting automatizado y preparación de datos.</li>
                </ul>
              </article>

              {/* Experiencia */}
              <article className="experience-card">
                <h3 className="experience-heading">Experiencia</h3>

                <p className="experience-role">Analista de Datos &amp; Economista</p>
                <p className="experience-meta">
                  Seguros / Servicios Financieros · Ecuador · 2021–2025
                </p>

                <p className="section-text">
                  Experiencia en análisis de datos, automatización de reportes y soporte estratégico
                  para toma de decisiones. He trabajado en proyectos de{" "}
                  <strong>Business Intelligence</strong>, optimización de procesos y modelos analíticos
                  para mejorar eficiencia y rentabilidad.
                </p>

                <ul className="experience-list">
                  <li>
                    Dashboards en <strong>Power BI</strong> integrando fuentes SQL.
                  </li>
                  <li>
                    Modelos de análisis financiero y técnico (KPIs, márgenes, siniestralidad).
                  </li>
                  <li>
                    Automatización de flujos con <strong>Python</strong>.
                  </li>
                  <li>
                    Soporte a dirección con análisis de tendencias y segmentación.
                  </li>
                </ul>

                <p className="section-text" style={{ marginTop: "1rem" }}>
                  Esto me ha permitido combinar economía + analítica para resolver problemas reales
                  de negocio con herramientas modernas de datos.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =======================
            PROYECTOS
        ======================== */}
        <section id="proyectos">
          <div className="container">
            <p className="section-kicker">Proyectos y casos prácticos</p>
            <h2 className="section-title">
              Explorando los datos desde distintas perspectivas
            </h2>

            <p className="section-text" style={{ marginBottom: "1.5rem" }}>
              Aquí muestro ejemplos y prototipos enfocados en análisis, automatización y
              visualización, convirtiendo información en decisiones accionables.
            </p>

            <div className="projects-grid">
              {/* Power BI */}
              <article className="project-card project-card--powerbi">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">
                      Dashboard de KPIs y Gráficos Interactivos
                    </h3>
                    <p className="project-meta">Evolución · Objetivos · Rendimiento</p>
                  </div>
                  <div className="project-icon">📊</div>
                </div>

                <div className="project-tech">
                  <span className="project-pill">Power BI</span>
                  <span className="project-pill">DAX</span>
                  <span className="project-pill">SQL Server</span>
                </div>

                <p className="section-text">
                  Dashboard interactivo con métricas de cumplimiento, evolución y desempeño general.
                  Diseñado para dirección y operación.
                </p>

                <div className="project-links">
                  <span style={{ opacity: 0.7 }}>Ejemplo disponible próximamente</span>
                </div>
              </article>

              {/* SQL */}
              <article className="project-card project-card--sql">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">Datamart en SQL para reporting</h3>
                    <p className="project-meta">Consultas optimizadas · Indicadores</p>
                  </div>
                  <div className="project-icon">🧮</div>
                </div>

                <div className="project-tech">
                  <span className="project-pill">SQL Server</span>
                  <span className="project-pill">Views</span>
                  <span className="project-pill">Optimización</span>
                </div>

                <p className="section-text">
                  Capa de datos limpia y reutilizable para Power BI, reportes financieros o análisis
                  de desempeño.
                </p>

                <div className="project-links">
                  <span style={{ opacity: 0.7 }}>
                    Scripts y documentación técnica en progreso
                  </span>
                </div>
              </article>

              {/* R */}
              <article className="project-card project-card--r">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">Análisis y predicciones con R</h3>
                    <p className="project-meta">Series temporales · Tendencias</p>
                  </div>
                  <div className="project-icon">📈</div>
                </div>

                <div className="project-tech">
                  <span className="project-pill">R</span>
                  <span className="project-pill">tidyverse</span>
                  <span className="project-pill">forecast</span>
                </div>

                <p className="section-text">
                  Exploración de patrones, estacionalidad y tendencias. Modelos de predicción para
                  proyecciones y detección de anomalías.
                </p>

                <div className="project-links">
                  <a
                    href="https://luisfer970811.github.io/dashboard-pib-mundial-2014/gdp_dashboard.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    🌎 Proyecto 1: Dashboard PIB mundial
                  </a>
                </div>

                <div className="project-links">
                  <a
                    href="https://luisfer970811.github.io/analisis-visualizacion-master-ceu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    📊 Proyecto 2: Limpieza y análisis descriptivo
                  </a>
                </div>
                <div className="project-links">
                  <a
                    href="https://luisfer970811.github.io/web-scraping-project/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                     🕷️ Proyecto 3: Manejo de gráficos, funciones y Web Scraping
                  </a>
                </div>
              </article>

              {/* Python */}
              <article className="project-card project-card--python">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">Automatización con Python</h3>
                    <p className="project-meta">Procesamiento · Integraciones · APIs</p>
                  </div>
                  <div className="project-icon">🐍</div>
                </div>

                <div className="project-tech">
                  <span className="project-pill">Python</span>
                  <span className="project-pill">Pandas</span>
                  <span className="project-pill">APIs</span>
                </div>

                <p className="section-text">
                  Scripts para limpiar datos, conectar APIs y generar reportes automáticos.
                </p>

                <div className="project-links">
                  <span style={{ opacity: 0.7 }}>Repositorio GitHub en desarrollo</span>
                </div>
              </article>

              {/* Personal */}
              <article className="project-card project-card--personal">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">Proyectos personales con datos</h3>
                    <p className="project-meta">Hábitos · Actividad · Creatividad</p>
                  </div>
                  <div className="project-icon">🌍</div>
                </div>

                <div className="project-tech">
                  <span className="project-pill">Excel</span>
                  <span className="project-pill">Power BI</span>
                  <span className="project-pill">R / Python</span>
                </div>

                <p className="section-text">
                  Aplicación de analítica a rutinas reales: hábitos, planificación y rendimiento.
                </p>

                <div className="project-links">
                  <span style={{ opacity: 0.7 }}>Casos en preparación</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://datawrapper.dwcdn.net/nv5cN/4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    📈 Proyecto 1: Tendencias demográficas en la Unión Europea (2013–2040)
                  </a>
                </div>
              </article>
            </div>

            <p className="section-text" style={{ marginTop: "1.5rem" }}>
              Próximamente incluiré enlaces directos a <strong>Power BI Service</strong>, repositorios
              de <strong>GitHub</strong> y notebooks interactivos.
            </p>
          </div>
        </section>

        {/* =======================
            TEASER SERVICIOS
        ======================== */}
        <section id="servicios-home" className="services-teaser">
          <div className="container services-teaser-grid">
            <div className="services-teaser-copy">
              <p className="section-kicker">Para empresas</p>
              <h2 className="section-title">¿Tus datos están repartidos en Excels y correos?</h2>
              <p className="section-text">
                Te ayudo a convertir ese caos en un{" "}
                <strong>sistema de reporting y automatización</strong>: dashboards claros, KPIs
                definidos y flujos que se actualizan solos.
              </p>

              <div className="services-tags">
                <span className="tag-pill">Dashboards en Power BI</span>
                <span className="tag-pill">SQL · Datamarts ligeros</span>
                <span className="tag-pill">Automatización</span>
                <span className="tag-pill">Seguros / finanzas</span>
              </div>

              <div className="services-teaser-actions">
                <Link to="/servicios" className="cta-primary">
                  Ver página de servicios
                </Link>
                <a
                  href="https://wa.link/ltvczq"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-secondary"
                >
                  Hablar por WhatsApp
                </a>
              </div>
            </div>

            <div className="services-teaser-cards">
              <article className="teaser-card teaser-card--highlight">
                <div className="teaser-icon">📊</div>
                <h3>Dashboards ejecutivos</h3>
                <p>Vista 360º: ventas, cartera, siniestralidad, margen y KPIs.</p>
                <ul className="teaser-list">
                  <li>KPIs definidos junto a dirección.</li>
                  <li>Segmentación por canal/producto/zona.</li>
                  <li>Listo para Power BI Service.</li>
                </ul>
              </article>

              <article className="teaser-card">
                <div className="teaser-icon">⚙️</div>
                <h3>Automatización de reporting</h3>
                <p>Adiós al copiar/pegar. Flujos que actualizan y envían resúmenes.</p>
                <ul className="teaser-list">
                  <li>Power Query, Python, n8n.</li>
                  <li>Cargas diarias/semanales/mensuales.</li>
                  <li>Alertas cuando algo se sale de rango.</li>
                </ul>
              </article>

              <article className="teaser-card">
                <div className="teaser-icon">🧠</div>
                <h3>Seguros y finanzas</h3>
                <p>Analítica para siniestralidad, pricing, rentabilidad y cartera.</p>
                <ul className="teaser-list">
                  <li>KPIs técnicos y cartera.</li>
                  <li>Segmentos rentables.</li>
                  <li>Soporte a decisiones comerciales.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* =======================
            CONTACTO + FORMULARIO
        ======================== */}
        <section id="contacto" className="section">
          <div className="container">
            <p className="section-kicker">Contacto</p>
            <h2 className="section-title">Hablemos</h2>

            <div className="contact-grid">
              {/* Izquierda */}
              <div>
                <p className="section-text">
                  ¿Quieres revisar un dashboard, automatizar un proceso o simplemente hablar de ideas
                  con datos? Estoy abierto a colaborar en proyectos freelance, roles full-time o
                  iniciativas académicas.
                </p>

                <ul className="contact-list">
                  <li>
                    📧 <strong>Email:</strong>{" "}
                    <a href="mailto:luis.fernandop081997@gmail.com">
                      luis.fernandop081997@gmail.com
                    </a>
                  </li>
                  <li>
                    💼 <strong>LinkedIn:</strong>{" "}
                    <a
                      href="https://www.linkedin.com/in/luisfernandoayala"
                      target="_blank"
                      rel="noreferrer"
                    >
                      linkedin.com/in/luisfernandoayala
                    </a>
                  </li>
                  <li>
                    💻 <strong>GitHub:</strong>{" "}
                    <a
                      href="https://github.com/LuisFer970811"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/LuisFer970811
                    </a>
                  </li>
                  <li>
                    💬 <strong>WhatsApp:</strong>{" "}
                    <a
                      href="https://wa.link/ltvczq"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-link"
                    >
                      Escríbeme por WhatsApp
                    </a>
                  </li>
                </ul>

                <p className="contact-note">
                  Si crees que puedo aportar en tu equipo o proyecto, estaré encantado de escucharte.
                </p>
              </div>

              {/* Derecha (FORM) */}
              <div className="contact-card">
                <h3 className="contact-card-title">Déjame tus datos</h3>
                <p className="contact-card-text">
                  Este formulario guarda tu mensaje en Google Sheets automáticamente.
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
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
                      defaultValue="analisis-datos"
                    >
                      <option value="analisis-datos">
                        1 · Análisis de datos y toma de decisiones
                      </option>
                      <option value="dashboards">
                        2 · Dashboards y visualización (Power BI / R / Python)
                      </option>
                      <option value="automatizacion">
                        3 · Automatización de procesos (n8n / Power Query / Python)
                      </option>
                      <option value="herramientas">
                        4 · Uso de herramientas (Power BI, SQL, R, Python)
                      </option>
                      <option value="seguros">5 · Proyectos para seguros / broker</option>
                      <option value="otro">6 · Otro tema</option>
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

                  <button type="submit" className="contact-submit" disabled={isSending}>
                    {isSending ? "Enviando..." : "Enviar mensaje"}
                  </button>

                  {statusMsg && (
                    <p className="contact-helper" style={{ marginTop: "0.5rem" }}>
                      {statusMsg}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Luis Ayala · Data &amp; Automation</span>
          <span>Hecho con React · Vite</span>
        </div>
      </footer>
    </div>
  );
}
