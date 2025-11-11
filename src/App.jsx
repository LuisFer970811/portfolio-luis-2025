// Si en el futuro vuelves a usar estos componentes, los descomentas
 import Projects from "./components/Projects";
 import Contact from "./components/Contact";
// import Footer from "./components/Footer";

import miFoto from "./assets/luis.ayala.jpg";

function App() {
  return (
    <div className="page">
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
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        {/* INICIO */}
        <section id="inicio" className="hero">
          <div className="container">
            <div>
              <p className="section-kicker">Data Portfolio</p>
              <h1 className="hero-title">
                Portafolio de{" "}
                <span className="hero-highlight">Luis Ayala</span> 🚀
              </h1>
              <p className="hero-subtitle">
                Analista de datos con experiencia en Power BI, SQL, R, Python y
                n8n. Me enfoco en convertir datos en decisiones accionables y en
                automatizar procesos para ahorrar tiempo y reducir errores.
              </p>
              <p className="hero-tagline">
                Actualmente explorando{" "}
                <span>automatización de flujos de datos</span>, buenas prácticas
                de storytelling con datos y soluciones end-to-end para negocio.
              </p>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-title">Resumen</div>
            <div className="hero-pill">
              <span>Disponibilidad</span>
              <span style={{ color: "#4ade80" }}>Abierto a oportunidades</span>
            </div>
            <div className="hero-metrics">
              <div>
                <div className="hero-metric-label">Herramientas</div>
                <div className="hero-metric-value">
                  Power BI · SQL Server · R · Python · n8n
                </div>
              </div>
              <div>
                <div className="hero-metric-label">Enfoque</div>
                <div className="hero-metric-value">
                  Automatización de reporting · Dashboards · Análisis para
                  negocio
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE MÍ */}
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
                  storytelling con datos y automatización con herramientas como{" "}
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

        {/* FORMACIÓN Y EXPERIENCIA */}
        <section id="formacion" className="experience-section">
          <div className="container">
            <p className="section-kicker">Trayectoria</p>
            <h2 className="section-title">Formación y experiencia</h2>

            <div className="experience-grid">
              {/* FORMACIÓN */}
              <article className="experience-card">
                <h3 className="experience-heading">Formación</h3>

                {/* Pregrado */}
                <p className="experience-role">
                  Economista
                </p>
                <p className="experience-meta">
                   Universidad Central del Ecuador · Quito · 2016&nbsp;–&nbsp;2021
                </p>
                <p className="section-text">
                  Formación sólida en análisis económico, finanzas y estadística
                  aplicada. Desarrollé competencias cuantitativas y analíticas
                  que luego extendí hacia el campo del{" "}
                  <strong>análisis de datos</strong> y la{" "}
                  <strong>inteligencia de negocio</strong>.
                </p>

                <hr style={{ opacity: 0.2, margin: "1rem 0" }} />

                {/* Máster */}
                <p className="experience-role">
                  Máster en Análisis y Divulgación de Datos
                </p>
                <p className="experience-meta">
                  Universidad CEU San Pablo · Madrid · 2025&nbsp;–&nbsp;Actualidad
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
    Seguros / Servicios Financieros · Ecuador · 2021&nbsp;–&nbsp;2025
  </p>

  <p className="section-text">
    Profesional con más de 5 años de experiencia en el sector asegurador y financiero, 
    especializado en el análisis de datos, automatización de reportes y soporte estratégico 
    para la toma de decisiones. He liderado proyectos de <strong>Business Intelligence</strong>, 
    optimización de procesos y desarrollo de modelos analíticos que mejoraron la eficiencia y 
    rentabilidad de las operaciones.
  </p>

  <ul className="experience-list">
    <li>
      Diseño e implementación de <strong>dashboards en Power BI</strong> para equipos comerciales 
      y de riesgos, integrando fuentes SQL y automatizando actualizaciones diarias.
    </li>
    <li>
      Desarrollo de <strong>modelos de análisis financiero y técnico-actuarial</strong> que 
      permitieron evaluar márgenes, siniestralidad y KPIs de cartera.
    </li>
    <li>
      Automatización de flujos de reporting con <strong>Python y n8n</strong>, reduciendo en más 
      del 60% el tiempo de preparación de informes.
    </li>
    <li>
      Apoyo a la dirección en decisiones estratégicas mediante análisis de tendencias, 
      segmentación de clientes y simulaciones de rentabilidad.
    </li>
  </ul>

  <p className="section-text" style={{ marginTop: "1rem" }}>
    Esta experiencia me ha permitido combinar mi formación como economista con el pensamiento 
    analítico y técnico, aplicando herramientas modernas de datos para resolver problemas reales 
    de negocio.
  </p>
</article>

            </div>
          </div>
        </section>

       {/* PROYECTOS */}
<section id="proyectos">
  <div className="container">
    <p className="section-kicker">Proyectos y Casos Prácticos</p>
    <h2 className="section-title">Explorando los datos desde distintas perspectivas</h2>

    <p className="section-text" style={{ marginBottom: "1.5rem" }}>
      En esta sección presento ejemplos y prototipos enfocados en el análisis de datos, 
      automatización y visualización. Cada proyecto muestra cómo convertir la información 
      en decisiones accionables, independientemente del sector o tipo de organización. 
      Son ejercicios reales que reflejan mi enfoque global: combinar 
      <strong> técnica, análisis y diseño visual </strong> para crear soluciones efectivas.
    </p>

    <div className="projects-grid">
      {/* POWER BI */}
      <article className="project-card project-card--powerbi">
        <div className="project-header">
          <div>
            <h3 className="project-title">Dashboard de KPIs y cumplimiento en Power BI</h3>
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
          Incluye visualizaciones comparativas, análisis de variaciones y seguimiento por 
          categoría o periodo. Diseñado para adaptarse a cualquier tipo de negocio o área funcional.
        </p>

        <div className="project-links">
          <span style={{ opacity: 0.7 }}>Ejemplo disponible próximamente</span>
        </div>
      </article>

      {/* SQL / REPORTING */}
      <article className="project-card project-card--sql">
        <div className="project-header">
          <div>
            <h3 className="project-title">Datamart en SQL para reporting y análisis</h3>
            <p className="project-meta">Consultas optimizadas · Indicadores clave</p>
          </div>
          <div className="project-icon">🧮</div>
        </div>

        <div className="project-tech">
          <span className="project-pill">SQL Server</span>
          <span className="project-pill">Views &amp; Stored Procedures</span>
          <span className="project-pill">Optimización</span>
        </div>

        <p className="section-text">
          Conjunto de consultas y vistas diseñadas para generar una capa de datos limpia, 
          estandarizada y reutilizable. Este modelo sirve como base para dashboards en Power BI, 
          reportes financieros o análisis de desempeño, sin importar el tipo de sector.
        </p>

        <div className="project-links">
          <span style={{ opacity: 0.7 }}>Scripts y documentación técnica en progreso</span>
        </div>
      </article>

      {/* R / ANÁLISIS ESTADÍSTICO */}
      <article className="project-card project-card--r">
        <div className="project-header">
          <div>
            <h3 className="project-title">Análisis exploratorio y predicciones con R</h3>
            <p className="project-meta">Series temporales · Tendencias · Predicción</p>
          </div>
          <div className="project-icon">📈</div>
        </div>

        <div className="project-tech">
          <span className="project-pill">R</span>
          <span className="project-pill">tidyverse</span>
          <span className="project-pill">forecast</span>
        </div>

        <p className="section-text">
          Análisis exploratorio de datos con foco en la detección de patrones, 
          estacionalidad y tendencias. Uso de modelos de predicción para proyectar resultados 
          o detectar anomalías. Enfocado a mostrar la potencia del análisis estadístico en contextos reales.
        </p>

        <div className="project-links">
          <span style={{ opacity: 0.7 }}>Notebook y visualizaciones disponibles pronto</span>
        </div>
      </article>

      {/* PYTHON / AUTOMATIZACIÓN */}
      <article className="project-card project-card--python">
        <div className="project-header">
          <div>
            <h3 className="project-title">Automatización ligera de procesos con Python</h3>
            <p className="project-meta">Procesamiento de datos · Integraciones · APIs</p>
          </div>
          <div className="project-icon">🐍</div>
        </div>

        <div className="project-tech">
          <span className="project-pill">Python</span>
          <span className="project-pill">Pandas</span>
          <span className="project-pill">APIs</span>
        </div>

        <p className="section-text">
          Scripts diseñados para optimizar tareas repetitivas: limpieza de ficheros, 
          conexión con APIs y generación automática de reportes. Ideal para reducir 
          tiempo manual y mejorar la eficiencia de los flujos de trabajo.
        </p>

        <div className="project-links">
          <span style={{ opacity: 0.7 }}>Repositorio GitHub en desarrollo</span>
        </div>
      </article>

      {/* n8n / WORKFLOW */}
      <article className="project-card project-card--n8n">
        <div className="project-header">
          <div>
            <h3 className="project-title">Flujos automatizados de reporting con n8n</h3>
            <p className="project-meta">APIs REST · Notificaciones · Integraciones</p>
          </div>
          <div className="project-icon">⚙️</div>
        </div>

        <div className="project-tech">
          <span className="project-pill">n8n</span>
          <span className="project-pill">Automatización</span>
          <span className="project-pill">Workflows</span>
        </div>

        <p className="section-text">
          Flujo automatizado que conecta fuentes de datos, ejecuta procesos y 
          envía reportes automáticos. Ejemplo de integración moderna para mejorar 
          la frecuencia del reporting y reducir tareas operativas.
        </p>

        <div className="project-links">
          <span style={{ opacity: 0.7 }}>Workflow documentado en breve</span>
        </div>
      </article>

      {/* HOBBY / VIDA REAL */}
      <article className="project-card project-card--personal">
        <div className="project-header">
          <div>
            <h3 className="project-title">Datos de vida real y proyectos personales</h3>
            <p className="project-meta">Hábitos · Actividad física · Creatividad con datos</p>
          </div>
          <div className="project-icon">🌍</div>
        </div>

        <div className="project-tech">
          <span className="project-pill">Excel</span>
          <span className="project-pill">Power BI</span>
          <span className="project-pill">R / Python</span>
        </div>

        <p className="section-text">
          Proyectos personales donde aplico analítica y visualización a hobbies y 
          rutinas diarias: rendimiento deportivo, hábitos de lectura o planificación. 
          Una forma distinta de mostrar cómo los datos también pueden inspirar y mejorar la vida cotidiana.
        </p>

        <div className="project-links">
          <span style={{ opacity: 0.7 }}>Casos personales en preparación</span>
        </div>
      </article>
    </div>

    <p className="section-text" style={{ marginTop: "1.5rem" }}>
      Próximamente incluiré enlaces directos a <strong>Power BI Service</strong>, 
      repositorios de <strong>GitHub</strong> y notebooks interactivos. 
      Cada ejemplo está diseñado para mostrar cómo los datos pueden contar historias, 
      optimizar procesos y generar impacto real.
    </p>
  </div>
</section>

        {/* CONTACTO */}
        <section id="contacto">
          <div className="container">
            <p className="section-kicker">Contacto</p>
            <h2 className="section-title">Hablemos</h2>

            <div className="contact-grid">
              <div>
                <p className="section-text">
                  ¿Quieres revisar un dashboard, automatizar un proceso o
                  simplemente hablar de ideas con datos? Estoy abierto a
                  colaborar en proyectos freelance, roles full-time o
                  iniciativas académicas relacionadas con datos y automatización.
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
                      href="https://www.linkedin.com/in/luis-fernando-ayala-64a0a91b8/"
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

              <div>
                <div className="hero-card">
                  <div className="hero-card-title">Próximo paso</div>
                  <p className="section-text">
                    El siguiente objetivo de este portfolio es añadir ejemplos
                    reales de dashboards en Power BI, scripts en Python y
                    automatizaciones con n8n, además de enlaces a repositorios
                    públicos. Vuelve pronto para ver las novedades.
                  </p>
                </div>
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
          <span>Hecho con React · Vite · TailwindCSS</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
