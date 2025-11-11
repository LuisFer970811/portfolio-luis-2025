// src/components/Projects.jsx

function Projects() {
  return (
    <section id="proyectos">
      <div className="container">
        <p className="section-kicker">Trabajos</p>
        <h2 className="section-title">Proyectos y casos que puedo construir</h2>

        <p className="section-text" style={{ marginBottom: "1.5rem" }}>
          No me centro en un único sector. Me interesa cómo los datos ayudan a
          entender el rendimiento, el cumplimiento, la evolución y las
          oportunidades, ya sea en una empresa, una ONG, un proyecto personal o
          un hobby. Estos son ejemplos de los tipos de soluciones que puedo
          desarrollar.
        </p>

        <div className="projects-grid">
          {/* POWER BI – KPI, CUMPLIMIENTO, EVOLUCIÓN */}
          <article className="project-card">
            <h3 className="project-title">
              Cuadro de mando de KPIs y cumplimiento en Power BI
            </h3>
            <p className="project-meta">Power BI · DAX · Modelado de datos</p>
            <p className="section-text">
              Dashboard interactivo para hacer seguimiento de KPIs clave:
              cumplimiento de objetivos, evolución mensual y comparaciones
              respecto a metas definidas. Incluye alertas visuales, segmentación
              por área/equipo y desgloses hasta nivel de detalle.
            </p>
            <ul className="experience-list">
              <li>Modelo estrella con tablas de hechos y dimensiones.</li>
              <li>
                Medidas DAX para % de cumplimiento, variaciones vs. objetivo y
                tendencia.
              </li>
              <li>
                Páginas enfocadas en resumen ejecutivo, detalle operativo y
                análisis ad-hoc.
              </li>
            </ul>
            <div className="project-links">
              <span style={{ opacity: 0.7 }}>Ejemplo listo para publicar</span>
            </div>
          </article>

          {/* SQL – DATAMART & RENDIMIENTO */}
          <article className="project-card">
            <h3 className="project-title">
              Datamart en SQL para reporting y rendimiento
            </h3>
            <p className="project-meta">SQL Server · Vistas · Stored Procedures</p>
            <p className="section-text">
              Construcción de un datamart en SQL que consolida información de
              distintas fuentes en tablas limpias y optimizadas para reporting.
              Pensado para alimentar dashboards en Power BI u otras herramientas.
            </p>
            <ul className="experience-list">
              <li>
                Limpieza y normalización de datos con consultas y vistas
                parametrizadas.
              </li>
              <li>
                Procedures para refrescos programados y cálculos de indicadores.
              </li>
              <li>
                Enfoque agnóstico al sector: válido para ventas, operaciones,
                RRHH, proyectos, etc.
              </li>
            </ul>
            <div className="project-links">
              <span style={{ opacity: 0.7 }}>Scripts y diagrama disponibles</span>
            </div>
          </article>

          {/* R – ANÁLISIS EXPLORATORIO Y PREDICCIÓN */}
<article className="project-card">
  <h3 className="project-title">
    Análisis exploratorio y predicciones con R
  </h3>

  <p className="project-meta">R • RStudio • tidyverse</p>

  <p className="section-text">
    Proyecto en R centrado en entender la evolución de una serie de tiempo
    (por ejemplo: demanda, uso de un servicio o actividad física) y generar
    predicciones a corto plazo usando modelos estadísticos y visualización de datos.
  </p>

  <ul className="experience-list">
    <li>Limpieza y transformación con <strong>tidyverse</strong>.</li>
    <li>Visualización de tendencias, estacionalidad y cambios estructurales.</li>
    <li>Modelos de pronóstico (ARIMA / regresión lineal) y evaluación del error.</li>
  </ul>

  {/* Botón de enlace al dashboard */}
  <a
    href="https://luisfer970811.github.io/dashboard-pib-mundial-2014/gdp_dashboard.html"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 px-5 py-2 bg-emerald-500 text-white font-medium rounded-xl shadow hover:bg-emerald-600 transition"
  >
    🌎 Ver Dashboard en vivo
  </a>
</article>


          {/* PYTHON – AUTOMATIZACIÓN LIGERA */}
          <article className="project-card">
            <h3 className="project-title">
              Scripts en Python para automatizar tareas repetitivas
            </h3>
            <p className="project-meta">Python · Pandas · APIs</p>
            <p className="section-text">
              Colección de scripts para automatizar tareas como limpieza de
              ficheros CSV, generación de extractos listos para reportar o
              conexión con APIs (por ejemplo, para descargar datos periódicos).
            </p>
            <ul className="experience-list">
              <li>Procesos de limpieza y estandarización de datos con Pandas.</li>
              <li>Generación automática de archivos de salida listos para BI.</li>
              <li>
                Integración con APIs externas para actualizar datos sin trabajo
                manual.
              </li>
            </ul>
            <div className="project-links">
              <span style={{ opacity: 0.7 }}>
                Repositorio GitHub disponible próximamente
              </span>
            </div>
          </article>

          {/* n8n – FLUJOS AUTOMATIZADOS */}
          <article className="project-card">
            <h3 className="project-title">
              Automatización de reportes con n8n
            </h3>
            <p className="project-meta">n8n · APIs REST · Notificaciones</p>
            <p className="section-text">
              Flujo automatizado que extrae datos, actualiza un origen (por
              ejemplo, una base o un archivo en la nube) y envía un resumen por
              correo o chat. Pensado para reducir tareas manuales de reporting.
            </p>
            <ul className="experience-list">
              <li>
                Conexión con distintas fuentes (APIs, hojas de cálculo, bases de
                datos).
              </li>
              <li>
                Transformaciones básicas y envío de resultados a los destinatarios
                adecuados.
              </li>
              <li>
                Diseño modular para reutilizar el flujo en distintos proyectos.
              </li>
            </ul>
            <div className="project-links">
              <span style={{ opacity: 0.7 }}>
                Workflow documentado y listo para adaptar
              </span>
            </div>
          </article>

          {/* PROYECTO “HOBBY / VIDA REAL” */}
          <article className="project-card">
            <h3 className="project-title">
              Datos de vida real: hobbies, hábitos y progreso personal
            </h3>
            <p className="project-meta">Excel · Power BI · R / Python</p>
            <p className="section-text">
              Proyecto pensado para mostrar el lado más humano: análisis de un
              hobby o aspecto personal (por ejemplo, entrenamiento, lectura,
              hábitos de estudio o finanzas personales) transformado en
              visualizaciones y métricas accionables.
            </p>
            <ul className="experience-list">
              <li>Diseño del modelo de datos a partir de registros propios.</li>
              <li>
                Dashboards que muestran evolución, objetivos y áreas de mejora.
              </li>
              <li>
                Enfoque de storytelling para explicar la historia detrás de los
                datos.
              </li>
            </ul>
            <div className="project-links">
              <span style={{ opacity: 0.7 }}>
                Caso ideal para comentar en entrevistas
              </span>
            </div>
          </article>
        </div>

        <p className="section-text" style={{ marginTop: "1.5rem" }}>
          Próximamente iré añadiendo enlaces a{" "}
          <strong>Power BI Service</strong>, repositorios de{" "}
          <strong>GitHub</strong> y ejemplos interactivos para que puedas
          explorar cómo trabajo, independientemente del sector o tipo de
          organización.
        </p>
      </div>
    </section>
  );
}

export default Projects;
