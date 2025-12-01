import miFoto from "./assets/luis.ayala.jpg";
// src/components/About.jsx
function About() {
  return (
    <section id="about" className="space-y-4">
      <h2 className="text-2xl font-semibold">Sobre mí</h2>

      <p className="text-slate-300">
        Soy <span className="font-semibold">Luis Ayala</span>, profesional
        orientado al análisis de datos y la automatización. Trabajo con
        herramientas como Power BI, SQL Server, RStudio, Python y n8n para
        construir reportes, modelos y flujos que aporten valor real al negocio.
      </p>

      <p className="text-slate-300">
        Me interesa todo el ciclo de analítica: desde la extracción de datos,
        limpieza y modelado, hasta la visualización interactiva y la
        automatización de tareas repetitivas.
      </p>

      <div className="mt-4">
        <h3 className="text-sm font-semibold text-slate-400 mb-2">
          Tecnologías principales
        </h3>
        <div className="flex flex-wrap gap-2 text-xs">
          {[
            "Power BI",
            "SQL",
            "R",
            "Python",
            "n8n",
            "Excel avanzado",
            "Git / GitHub",
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
