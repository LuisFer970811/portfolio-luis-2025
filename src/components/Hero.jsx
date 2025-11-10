// src/components/Hero.jsx
function Hero() {
  return (
    <section id="home" className="flex flex-col gap-6">
      <p className="text-sm text-blue-300 uppercase tracking-[0.25em]">
        Data · Analytics · Automation
      </p>

      <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
        Portafolio de <span className="text-blue-400">Luis Ayala</span> 🚀
      </h1>

      <p className="text-slate-300 max-w-xl">
        Analista de datos con experiencia en{" "}
        <span className="font-semibold">Power BI, SQL, R, Python y n8n</span>.
        Me enfoco en convertir datos en decisiones accionables y automatizar
        procesos de negocio.
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href="#projects"
          className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-sm font-medium transition"
        >
          Ver proyectos
        </a>
        <a
          href="https://www.linkedin.com" // cambia por tu LinkedIn
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-md border border-slate-600 text-sm font-medium hover:border-blue-400 hover:text-blue-300 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com" // cambia por tu GitHub
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-md border border-slate-600 text-sm font-medium hover:border-blue-400 hover:text-blue-300 transition"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Hero;
