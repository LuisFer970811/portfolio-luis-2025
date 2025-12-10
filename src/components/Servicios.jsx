// src/components/Servicios.jsx
import React from "react";
import { Link } from "react-router-dom";
import miFoto from "../assets/luis.ayala.jpg";

export default function Servicios() {
  return (
    <div className="services-page">
      {/* TOPBAR (mismo estilo que Home) */}
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">
            <span className="brand-name">Luis Ayala</span>
            <span className="brand-tag">Data · Analytics · Automation</span>
          </div>

          <nav className="nav">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
            <a href="/#proyectos" className="nav-link">
              Proyectos
            </a>
            <Link to="/servicios" className="nav-link active">
              Servicios
            </Link>
            <a href="/#contacto" className="nav-link">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO – Modo Consultora Tech */}
        <section className="services-hero">
          <div className="container hero-grid">
            <div>
              <p className="services-kicker">SERVICIOS · DATA & AUTOMATION</p>

              {/* BLOQUE PERFIL CON FOTO */}
              <div className="services-profile">
                <img
                  src={miFoto}
                  alt="Luis Ayala - Data & Automation"
                  className="services-photo"
                />
                <div className="services-profile-text">
                  <p className="services-profile-name">Luis Ayala</p>
                  <p className="services-profile-role">
                    Economista · Analista de Datos · Data & Automation Partner
                  </p>
                </div>
              </div>

              <h1 className="services-title">
                Tu <span>motor de datos</span> para pasar de Excel
                manual a decisiones en tiempo real.
              </h1>

              <p className="services-subtitle">
                Diseño y construyo sistemas de reporting, dashboards y flujos
                automatizados que convierten tus datos dispersos en una
                plataforma clara, fiable y lista para tomar decisiones. Sin
                ruido, sin humo, con foco total en negocio.
              </p>

              <div className="cta-group">
                <a
                  href="https://wa.link/ltvczq"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-primary"
                >
                  🚀 Agendar llamada exploratoria
                </a>
                <a href="/#proyectos" className="cta-secondary">
                  Ver proyectos y casos
                </a>
              </div>
            </div>

            <aside className="hero-card-services">
              <h3>Arquitectura ligera de datos para tu negocio</h3>
              <ul>
                <li>Integración de fuentes: Excel, SQL, CRM, ERP, APIs</li>
                <li>Modelos de datos limpios listos para Power BI.</li>
                <li>Dashboards ejecutivos con KPIs claros, sin ruido.</li>
                <li>
                  Automatización de reportes con Power Query, Python y n8n.
                </li>
                <li>
                  Acompañamiento para que tu equipo entienda y use los datos.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        {/* BENEFICIOS CLAVE */}
        <section className="services-benefits">
          <div className="container">
            <p className="section-kicker">BENEFICIOS</p>
            <h2 className="section-title">
              Qué obtienes al trabajar conmigo en datos y automatización
            </h2>

            <div className="benefits-grid">
              <article className="benefit-card">
                <div className="svc-icon">📊</div>
                <h3>Visión completa del negocio</h3>
                <p>
                  Un único lugar donde ver ventas, cartera, margen y KPIs
                  críticos. Sin perseguir Excels, sin versiones distintas.
                </p>
              </article>

              <article className="benefit-card">
                <div className="svc-icon">⚙️</div>
                <h3>Reportes que se hacen solos</h3>
                <p>
                  Automatizo la actualización de datos para que tu equipo deje
                  de copiar/pegar y se dedique a analizar y decidir.
                </p>
              </article>

              <article className="benefit-card">
                <div className="svc-icon">🧠</div>
                <h3>KPIs claros, sin ruido</h3>
                <p>
                  Definimos qué importa de verdad: pocos indicadores, muy bien
                  diseñados y explicados para dirección y operativa.
                </p>
              </article>

              <article className="benefit-card">
                <div className="svc-icon">🚀</div>
                <h3>Escalable y listo para crecer</h3>
                <p>
                  Arquitectura ligera que puede crecer con tu negocio sin
                  rehacer todo cada vez que cambie una tabla o un proceso.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* POR QUÉ LUIS COMO PARTNER */}
        <section className="why-me">
          <div className="container">
            <p className="section-kicker">PARTNER DE DATOS</p>
            <h2 className="section-title">Por qué trabajar conmigo</h2>

            <div className="why-list">
              <p>✓ +5 años creando dashboards y reporting real en seguros y finanzas.</p>
              <p>✓ Experiencia en entornos de alta regulación y control de riesgo.</p>
              <p>✓ Lenguaje doble: hablo “Excel y SQL” pero también negocio y estrategia.</p>
              <p>
                ✓ Acompaño a tu equipo: no solo entrego un dashboard, dejo un
                sistema que entienden, confían y usan.
              </p>
            </div>
          </div>
        </section>

        {/* PLANES / SUSCRIPCIÓN */}
        <section className="pricing-section">
          <div className="container">
            <p className="section-kicker">PLANES</p>
            <h2 className="section-title">Planes y formas de trabajo</h2>
            <p className="section-text">
              Los planes se adaptan a tu realidad. Todos comienzan con una
              llamada gratuita para entender el contexto, revisar tus datos y
              definir el enfoque correcto. A partir de ahí, marcamos alcance y
              presupuesto cerrados.
            </p>

            <div className="pricing-grid">
              {/* Plan 1 */}
              <article className="price-card">
                <h3>Starter · Diagnóstico & Quick Wins</h3>
                <p className="tagline">
                  Para negocios que saben que pueden hacer más con sus datos,
                  pero no saben por dónde empezar.
                </p>
                <p className="price">Proyecto puntual</p>
                <ul>
                  <li>· Revisión de fuentes de datos y reporting actual.</li>
                  <li>· Identificación de 3–5 KPIs críticos.</li>
                  <li>· Dashboard inicial en Power BI o Excel avanzado.</li>
                  <li>
                    · Checklist de recomendaciones para los próximos 3 meses.
                  </li>
                </ul>
                <a
                  href="https://wa.link/ltvczq"
                  target="_blank"
                  rel="noreferrer"
                  className="price-cta"
                >
                  Quiero un diagnóstico
                </a>
              </article>

              {/* Plan 2 */}
              <article className="price-card featured">
                <span className="badge">Más elegido</span>
                <h3>Growth · Sistema de reporting y automatización</h3>
                <p className="tagline">
                  Ideal para empresas que ya miden cosas, pero necesitan un
                  sistema profesional, automatizado y estable.
                </p>
                <p className="price">Proyecto 6–10 semanas</p>
                <ul>
                  <li>· Modelo de datos robusto listo para Power BI.</li>
                  <li>· 2–3 dashboards ejecutivos y operativos.</li>
                  <li>
                    · Automatización de cargas con Power Query / Python / n8n.
                  </li>
                  <li>· Sesiones de formación con tu equipo.</li>
                </ul>
                <a
                  href="https://wa.link/ltvczq"
                  target="_blank"
                  rel="noreferrer"
                  className="price-cta"
                >
                  Diseñemos tu sistema
                </a>
              </article>

              {/* Plan 3 */}
              <article className="price-card">
                <h3>Data Partner · Acompañamiento continuo</h3>
                <p className="tagline">
                  Para equipos que quieren un “Chief Data Officer” de cabecera,
                  pero en formato flexible.
                </p>
                <p className="price">Modelo mensual</p>
                <ul>
                  <li>· Mantenimiento y evolución de dashboards.</li>
                  <li>· Nuevas automatizaciones según necesidades.</li>
                  <li>· Reuniones periódicas de seguimiento de KPIs.</li>
                  <li>· Soporte directo por canales privados.</li>
                </ul>
                <a
                  href="https://wa.link/ltvczq"
                  target="_blank"
                  rel="noreferrer"
                  className="price-cta"
                >
                  Hablar sobre modalidad partner
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="cta-final">
          <div className="container">
            <h2 className="section-title">
              ¿Listo para dejar de pelear con los Excels?
            </h2>
            <p>
              En la llamada inicial revisamos tu situación actual, vemos qué
              datos tienes y diseñamos juntos el siguiente paso. Sin compromiso,
              con máxima claridad.
            </p>
            <div style={{ marginTop: "1.3rem" }}>
              <a
                href="https://wa.link/ltvczq"
                target="_blank"
                rel="noreferrer"
                className="cta-primary"
              >
                🚀 Agendar llamada de 30 min
              </a>
            </div>
          </div>
          <section>
            
          </section>
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
