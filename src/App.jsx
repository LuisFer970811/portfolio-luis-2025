// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Servicios from "./components/Servicios";
import ChatWidget from "./components/ChatWidget"; // 👈 IMPORTANTE

import "./App.css";

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>

      {/* Bot flotante en todas las páginas */}
      <ChatWidget />
    </div>
  );
}
