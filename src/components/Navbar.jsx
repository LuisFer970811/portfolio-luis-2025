// src/components/Navbar.jsx
function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-950/80 backdrop-blur border-b border-slate-800 z-50">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="font-semibold tracking-tight">
          <span className="text-blue-400">Luis</span> Ayala
        </span>

        <div className="flex gap-4 text-sm">
          <a href="#home" className="hover:text-blue-400 transition">Inicio</a>
          <a href="#about" className="hover:text-blue-400 transition">Sobre mí</a>
          <a href="#projects" className="hover:text-blue-400 transition">Proyectos</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contacto</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
