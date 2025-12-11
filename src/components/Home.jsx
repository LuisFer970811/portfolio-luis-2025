// src/components/Home.jsx
import { Link } from "react-router-dom";
import miFoto from "../assets/luis.ayala.jpg";

export default function Home() {
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
            {/* Link dedicado a la landing de servicios */}
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
            {/* Columna izquierda: discurso portfolio */}
            <div>
              <p className="section-kicker">DATA PORTFOLIO</p>

              <h1 className="hero-title">
                Portafolio de{" "}
                <span className="hero-highlight">Luis Ayala</span> 🚀
              </h1>

              <p className="hero-subtitle">
                Economista y analista de datos con experiencia en{" "}
                <strong>Power BI, SQL Server, R, Python y n8n</strong>.
                Combino reporting ejecutivo, automatización ligera y
                storytelling con datos para que los equipos de negocio tomen
                decisiones sin ruido.
              </p>

              <p className="hero-tagline">
                Este espacio está pensado como mi{" "}
                <strong>portfolio de datos</strong>: aquí muestro quién soy,
                cómo trabajo y ejemplos reales.{" "}
                <span>
                  Si eres empresa y buscas ayuda con dashboards o
                  automatización, también puedes ver mis servicios para negocio.
                </span>
              </p>

              {/* Badges / chips hero */}
              <div className="hero-badges-row">
                <span className="hero-badge">
                  +5 años en seguros & finanzas
                </span>
                <span className="hero-badge">Dashboards ejecutivos</span>
                <span className="hero-badge">Automatización de reporting</span>
              </div>

              {/* Acciones principales del hero */}
              <div className="hero-actions">
                <a href="#proyectos" className="btn-primary">
                  Ver proyectos y dashboards
                </a>
                <Link to="/servicios" className="btn-ghost">
                  Servicios para empresas
                </Link>
              </div>
            </div>

            {/* Columna derecha: tarjeta resumen perfil */}
            <aside className="hero-card">
              <div className="hero-card-title">Resumen rápido</div>

              <div className="hero-pill">
                <span>Disponibilidad</span>
                <span style={{ color: "#4ade80" }}>
                  Abierto a oportunidades
                </span>
              </div>

              <div className="hero-metrics">
                <div>
                  <div className="hero-metric-label">Stack principal</div>
                  <div className="hero-metric-value">
                    Power BI · SQL Server · R · Python · n8n
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
              {/* FOTO */}
              <div className="about-photo-wrapper">
                <img
                  src={miFoto}
                  alt="Luis Ayala - Analista de Datos"
                  className="about-photo"
                />
              </div>

              {/* TEXTO */}
              <div className="about-text">
                <h2 className="section-title">Sobre mí</h2>

                <p className="section-text">
                  Soy <strong>Economista y Analista de Datos</strong> con
                  experiencia en los sectores{" "}
                  <strong>asegurador, bancario y financiero</strong>. Me
                  especializo en{" "}
                  <strong>Business Intelligence, Power BI, SQL, R</strong> y
                  automatización de procesos, utilizando los datos para mejorar
                  la toma de decisiones, la eficiencia operativa y la
                  rentabilidad del negocio.
                </p>

                <p className="section-text" style={{ marginTop: "0.75rem" }}>
                  Actualmente curso el{" "}
                  <strong>Máster en Análisis y Divulgación de Datos</strong> en
                  la <strong>Universidad CEU San Pablo</strong> (Madrid,
                  España), donde profundizo en visualización avanzada,
                  storytelling con datos y automatización con{" "}
                  <strong>Python y n8n</strong>.
                </p>

                <p className="section-text" style={{ marginTop: "0.75rem" }}>
                  Mi trayectoria combina la rigurosidad analítica con la visión
                  estratégica: he participado en proyectos de{" "}
                  <strong>
                    reporting financiero, modelado estadístico y automatización
                    de flujos
                  </strong>{" "}
                  orientados a conectar los datos con las necesidades reales del
                  negocio.
                </p>

                {/* CHIPS DE HERRAMIENTAS */}
                <div className="chips">
                  <span className="chip">Power BI / DAX</span>
                  <span className="chip">SQL Server</span>
                  <span className="chip">R &amp; RStudio</span>
                  <span className="chip">Python</span>
                  <span className="chip">n8n · Flujos automatizados</span>
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
              {/* FORMACIÓN */}
              <article className="experience-card">
                <h3 className="experience-heading">Formación</h3>

                <p className="experience-role">Economista</p>
                <p className="experience-meta">
                  Universidad Central del Ecuador · Quito · 2016–2021
                </p>
                <p className="section-text">
                  Formación sólida en análisis económico, finanzas y estadística
                  aplicada. Desarrollé competencias cuantitativas y analíticas
                  que luego extendí hacia el campo del{" "}
                  <strong>análisis de datos</strong> y la{" "}
                  <strong>inteligencia de negocio</strong>.
                </p>

                <hr style={{ opacity: 0.2, margin: "1rem 0" }} />

                <p className="experience-role">
                  Máster en Análisis y Divulgación de Datos
                </p>
                <p className="experience-meta">
                  Universidad CEU San Pablo · Madrid · 2025–Actualidad
                </p>
                <p className="section-text">
                  Programa enfocado en analítica avanzada, visualización y
                  storytelling con datos. Trabajo con herramientas como{" "}
                  <strong>Power BI</strong>, <strong>R</strong>,
                  <strong> Python</strong> y <strong>SQL</strong> para construir
                  informes comprensibles tanto para perfiles técnicos como
                  directivos.
                </p>

                <ul className="experience-list">
                  <li>
                    Modelado y análisis aplicado a datos económicos y de
                    negocio.
                  </li>
                  <li>
                    Visualización y narrativa con datos para toma de decisiones.
                  </li>
                  <li>
                    Trabajo con grandes volúmenes de datos y reporting
                    automatizado.
                  </li>
                </ul>
              </article>

              {/* EXPERIENCIA */}
              <article className="experience-card">
                <h3 className="experience-heading">Experiencia</h3>

                <p className="experience-role">
                  Analista de Datos &amp; Economista
                </p>
                <p className="experience-meta">
                  Seguros / Servicios Financieros · Ecuador · 2021–2025
                </p>

                <p className="section-text">
                  Profesional con más de 5 años de experiencia en el sector
                  asegurador y financiero, especializado en el análisis de
                  datos, automatización de reportes y soporte estratégico para
                  la toma de decisiones. He liderado proyectos de{" "}
                  <strong>Business Intelligence</strong>, optimización de
                  procesos y desarrollo de modelos analíticos que mejoraron la
                  eficiencia y rentabilidad de las operaciones.
                </p>

                <ul className="experience-list">
                  <li>
                    Diseño e implementación de{" "}
                    <strong>dashboards en Power BI</strong> para equipos
                    comerciales y de riesgos, integrando fuentes SQL y
                    automatizando actualizaciones diarias.
                  </li>
                  <li>
                    Desarrollo de{" "}
                      <strong>modelos de análisis financiero y técnico-actuarial</strong>{" "}
                    que permitieron evaluar márgenes, siniestralidad y KPIs de
                    cartera.
                  </li>
                  <li>
                    Automatización de flujos de reporting con{" "}
                    <strong>Python y n8n</strong>, reduciendo en más del 60% el
                    tiempo de preparación de informes.
                  </li>
                  <li>
                    Apoyo a la dirección en decisiones estratégicas mediante
                    análisis de tendencias, segmentación de clientes y
                    simulaciones de rentabilidad.
                  </li>
                </ul>

                <p className="section-text" style={{ marginTop: "1rem" }}>
                  Esta experiencia me ha permitido combinar mi formación como
                  economista con el pensamiento analítico y técnico, aplicando
                  herramientas modernas de datos para resolver problemas reales
                  de negocio.
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
              Aquí muestro ejemplos y prototipos enfocados en análisis de datos,
              automatización y visualización. Cada proyecto busca convertir
              información en decisiones accionables, combinando{" "}
              <strong>técnica, análisis y diseño visual</strong>.
            </p>

            <div className="projects-grid">
              {/* POWER BI */}
              <article className="project-card project-card--powerbi">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">
                      Dashboard de KPIs y cumplimiento en Power BI
                    </h3>
                    <p className="project-meta">
                      Evolución · Objetivos · Rendimiento
                    </p>
                  </div>
                  <div className="project-icon">📊</div>
                </div>

                <div className="project-tech">
                  <span className="project-pill">Power BI</span>
                  <span className="project-pill">DAX</span>
                  <span className="project-pill">SQL Server</span>
                </div>

                <p className="section-text">
                  Dashboard interactivo con métricas de cumplimiento, evolución
                  y desempeño general. Incluye visualizaciones comparativas,
                  análisis de variaciones y seguimiento por categoría o periodo.
                  Diseñado para adaptarse a cualquier tipo de negocio o área
                  funcional.
                </p>

                <div className="project-links">
                  <span style={{ opacity: 0.7 }}>
                    Ejemplo disponible próximamente
                  </span>
                </div>
              </article>

              {/* SQL / REPORTING */}
              <article className="project-card project-card--sql">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">
                      Datamart en SQL para reporting y análisis
                    </h3>
                    <p className="project-meta">
                      Consultas optimizadas · Indicadores clave
                    </p>
                  </div>
                  <div className="project-icon">🧮</div>
                </div>

                <div className="project-tech">
                  <span className="project-pill">SQL Server</span>
                  <span className="project-pill">Views &amp; Stored Procedures</span>
                  <span className="project-pill">Optimización</span>
                </div>

                <p className="section-text">
                  Conjunto de consultas y vistas diseñadas para generar una capa
                  de datos limpia, estandarizada y reutilizable. Base sólida
                  para dashboards en Power BI, reportes financieros o análisis
                  de desempeño.
                </p>

                <div className="project-links">
                  <span style={{ opacity: 0.7 }}>
                    Scripts y documentación técnica en progreso
                  </span>
                </div>
              </article>

              {/* R / ANÁLISIS ESTADÍSTICO */}
              <article className="project-card project-card--r">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">
                      Análisis exploratorio y predicciones con R
                    </h3>
                    <p className="project-meta">
                      Series temporales · Tendencias · Predicción
                    </p>
                  </div>
                  <div className="project-icon">📈</div>
                </div>

                <div className="project-tech">
                  <span className="project-pill">R</span>
                  <span className="project-pill">tidyverse</span>
                  <span className="project-pill">forecast</span>
                </div>

                <p className="section-text">
                  Análisis exploratorio de datos con foco en patrones,
                  estacionalidad y tendencias. Uso de modelos de predicción para
                  proyectar resultados o detectar anomalías.
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
              </article>

              {/* PYTHON / AUTOMATIZACIÓN */}
              <article className="project-card project-card--python">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">
                      Automatización ligera de procesos con Python
                    </h3>
                    <p className="project-meta">
                      Procesamiento de datos · Integraciones · APIs
                    </p>
                  </div>
                  <div className="project-icon">🐍</div>
                </div>

                <div className="project-tech">
                  <span className="project-pill">Python</span>
                  <span className="project-pill">Pandas</span>
                  <span className="project-pill">APIs</span>
                </div>

                <p className="section-text">
                  Scripts para optimizar tareas repetitivas: limpieza de
                  ficheros, conexión con APIs y generación automática de
                  reportes. Ideal para reducir tiempo manual y mejorar la
                  eficiencia de los flujos de trabajo.
                </p>

                <div className="project-links">
                  <span style={{ opacity: 0.7 }}>
                    Repositorio GitHub en desarrollo
                  </span>
                </div>
              </article>

              {/* HOBBY / VIDA REAL */}
              <article className="project-card project-card--personal">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">
                      Datos de vida real y proyectos personales
                    </h3>
                    <p className="project-meta">
                      Hábitos · Actividad física · Creatividad con datos
                    </p>
                  </div>
                  <div className="project-icon">🌍</div>
                </div>

                <div className="project-tech">
                  <span className="project-pill">Excel</span>
                  <span className="project-pill">Power BI</span>
                  <span className="project-pill">R / Python</span>
                </div>

                <p className="section-text">
                  Proyectos personales donde aplico analítica y visualización a
                  hobbies y rutinas diarias: rendimiento deportivo, hábitos de
                  lectura o planificación.
                </p>

                <div className="project-links">
                  <span style={{ opacity: 0.7 }}>
                    Casos personales en preparación
                  </span>
                </div>
              </article>
            </div>

            <p className="section-text" style={{ marginTop: "1.5rem" }}>
              Próximamente incluiré enlaces directos a{" "}
              <strong>Power BI Service</strong>, repositorios de{" "}
              <strong>GitHub</strong> y notebooks interactivos.
            </p>
          </div>
        </section>

        {/* =======================
    TEASER DE SERVICIOS (usa clases de App.css)
======================== */}
<section id="servicios-home" className="services-teaser">
  <div className="container services-teaser-grid">
    {/* Columna izquierda: copy + pasos */}
    <div className="services-teaser-copy">
      <p className="section-kicker">Para empresas</p>
      <h2 className="section-title">
        ¿Tus datos están repartidos en Excels y correos?
      </h2>
      <p className="section-text">
        Te ayudo a convertir ese caos en un{" "}
        <strong>sistema de reporting y automatización</strong>:
        dashboards claros, KPIs definidos y flujos que se actualizan solos.
        Sin humo técnico, con foco en negocio.
      </p>

      {/* Tags de servicios */}
      <div className="services-tags">
        <span className="tag-pill">Dashboards en Power BI</span>
        <span className="tag-pill">SQL · Datamarts ligeros</span>
        <span className="tag-pill">Automatización con n8n</span>
        <span className="tag-pill">Reporting financiero / seguros</span>
      </div>

      {/* Flujo 3 pasos */}
      <div className="services-flow">
        <div className="flow-step">
          <div className="flow-step-number">1</div>
          <div>
            <p className="flow-step-title">Diagnóstico rápido</p>
            <p className="flow-step-text">
              Revisamos tus fuentes de datos, reportes actuales y qué KPIs
              realmente importan para tu negocio.
            </p>
          </div>
        </div>
        <div className="flow-step">
          <div className="flow-step-number">2</div>
          <div>
            <p className="flow-step-title">Sistema de reporting</p>
            <p className="flow-step-text">
              Diseño de modelo de datos + dashboards en Power BI adaptados
              a dirección y operativa.
            </p>
          </div>
        </div>
        <div className="flow-step">
          <div className="flow-step-number">3</div>
          <div>
            <p className="flow-step-title">Automatización y soporte</p>
            <p className="flow-step-text">
              Automatización de cargas con Power Query, Python o n8n y acompañamiento
              para que tu equipo use de verdad el sistema.
            </p>
          </div>
        </div>
      </div>

      {/* Acciones */}
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

    {/* Columna derecha: mini-cards de tipos de proyectos */}
    <div className="services-teaser-cards">
      <article className="teaser-card teaser-card--highlight">
        <div className="teaser-icon">📊</div>
        <h3>Dashboards ejecutivos</h3>
        <p>
          Vista 360º de tu negocio: ventas, cartera, siniestralidad, margen
          o cualquier indicador clave que necesites seguir.
        </p>
        <ul className="teaser-list">
          <li>KPIs definidos junto a dirección.</li>
          <li>Segmentación por canal, producto, zona o equipo.</li>
          <li>Listo para conectar a Power BI Service.</li>
        </ul>
      </article>

      <article className="teaser-card">
        <div className="teaser-icon">⚙️</div>
        <h3>Automatización de reporting</h3>
        <p>
          Adiós a copiar/pegar datos cada mes. Flujos que actualizan tus
          fuentes y envían resúmenes automáticos.
        </p>
        <ul className="teaser-list">
          <li>Power Query, Python y n8n.</li>
          <li>Cargas diarias, semanales o mensuales.</li>
          <li>Alertas por email o chat cuando algo se sale de rango.</li>
        </ul>
      </article>

      <article className="teaser-card">
        <div className="teaser-icon">🧠</div>
        <h3>Consultoría para seguros y finanzas</h3>
        <p>
          Uso de datos para entender siniestralidad, pricing, rentabilidad
          por cartera y comportamiento de clientes.
        </p>
        <ul className="teaser-list">
          <li>Análisis de cartera y KPIs técnicos.</li>
          <li>Identificación de segmentos rentables.</li>
          <li>Soporte a decisiones comerciales y de riesgo.</li>
        </ul>
      </article>
    </div>
  </div>
</section>

                {/* =======================
            CONTACTO
        ======================== */}
        <section id="contacto" className="section">
          <div className="container">
            <p className="section-kicker">Contacto</p>
            <h2 className="section-title">Hablemos</h2>

            <div className="contact-grid">
              {/* Columna izquierda: datos de contacto */}
              <div>
                <p className="section-text">
                  ¿Quieres revisar un dashboard, automatizar un proceso o
                  simplemente hablar de ideas con datos? Estoy abierto a
                  colaborar en proyectos freelance, roles full-time o
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
                  Si crees que puedo aportar en tu equipo o proyecto, estaré
                  encantado de escucharte.
                </p>
              </div>

              {/* Columna derecha: formulario conectado a n8n */}
              <div className="contact-card">
                <h3 className="contact-card-title">Déjame tus datos</h3>
                <p className="contact-card-text">
                  Este formulario envía la información a mi flujo en n8n, donde
                  se guarda en Google Sheets para poder responderte mejor.
                </p>

                <form
                  className="contact-form"
                  method="POST"
                  action="https://script.google.com/macros/s/AKfycbwGKX84a3nP0kDZZOHkb75E9VOUw1A3ESKYdPooIqyXq1_R9R6Cdt-mYV2_4XPIQ6mK/exec"
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
                      <option value="Análisis de datos y toma de decisiones">
    1. Análisis de datos y toma de decisiones
  </option>

  <option value="Dashboards y visualización (Power BI / R / Python)">
    2. Dashboards y visualización (Power BI / R / Python)
  </option>

  <option value="Automatización de procesos (n8n / Power Query / Python)">
    3. Automatización de procesos (n8n / Power Query / Python)
  </option>

  <option value="Modelos y análisis estadístico (R / Python)">
    4. Modelos y análisis estadístico (R / Python)
  </option>

  <option value="Proyectos para seguros / broker">
    5. Proyectos para seguros / broker
  </option>

  <option value="Integración de datos y SQL (datamarts ligeros)">
    6. Integración de datos y SQL (datamarts ligeros)
  </option>

  <option value="Optimización de reporting y KPIs">
    7. Optimización de reporting y KPIs
  </option>

  <option value="Otro tema">
    8. Otro tema
  </option>
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

                  {/* campo oculto para saber de dónde viene */}
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
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} Luis Ayala · Data &amp; Automation
          </span>
          <span>Hecho con React · Vite</span>
        </div>
      </footer>
    </div>
  );
}
