// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 py-4 text-xs text-slate-500 flex justify-between flex-wrap gap-2">
        <span>© {new Date().getFullYear()} Luis Ayala · Data & Automation</span>
        <span>Construido con React, Vite y TailwindCSS</span>
      </div>
    </footer>
  );
}

export default Footer;
    