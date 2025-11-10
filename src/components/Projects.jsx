// src/components/Projects.jsx
const projects = [
  {
    title: "Dashboard de ventas en Power BI",
    tech: "Power BI · DAX · SQL",
    description:
      "Modelo de ventas con métricas de ingresos, margen, segmentación de clientes y análisis por región.",
    link: "#", // aquí pondrás el link a tu reporte publicado
  },
  {
    title: "Automatización de reportes con n8n",
    tech: "n8n · APIs · PostgreSQL",
    description:
      "Flujos automáticos que extraen datos, los procesan y envían reportes diarios por email.",
    link: "#",
  },
  {
    title: "Modelo estadístico en R",
    tech: "R · RStudio · ggplot2",
    description:
      "Análisis exploratorio y modelo de predicción para entender factores clave en el comportamiento de usuarios.",
    link: "#",
  },
  {
    title: "ETL y análisis en Python",
    tech: "Python · Pandas · SQL",
    description:
      "Pipeline de limpieza, transformación y carga de datos para preparar información para dashboards.",
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="space-y-4">
      <h2 className="text-2xl font-semibold">Proyectos destacados</h2>
      <p className="text-slate-300">
        Algunos de los trabajos que he realizado con datos y automatización.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition"
          >
            <h3 className="font-semibold mb-1">{project.title}</h3>
            <p className="text-xs text-blue-300 mb-2">{project.tech}</p>
            <p className="text-sm text-slate-300 mb-3">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-blue-400 hover:underline"
            >
              Ver proyecto →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
