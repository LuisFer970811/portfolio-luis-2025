// src/components/Contact.jsx
function Contact() {
  return (
    <section id="contact" className="space-y-4">
      <h2 className="text-2xl font-semibold">Contacto</h2>
      <p className="text-slate-300">
        ¿Te interesa que colaboremos o quieres ver más de mi trabajo? 
        Puedes contactarme por estos medios:
      </p>

      <div className="flex flex-col sm:flex-row gap-3 text-sm">
        <a
          href="mailto:tucorreo@ejemplo.com" // cámbialo por tu correo real
          className="px-4 py-2 rounded-md border border-slate-700 hover:border-blue-400 hover:text-blue-300 transition"
        >
          📧 Envíame un correo
        </a>
        <a
          href="https://www.linkedin.com" // tu LinkedIn
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-md border border-slate-700 hover:border-blue-400 hover:text-blue-300 transition"
        >
          💼 LinkedIn
        </a>
        <a
          href="https://github.com" // tu GitHub
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-md border border-slate-700 hover:border-blue-400 hover:text-blue-300 transition"
        >
          🧑‍💻 GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
