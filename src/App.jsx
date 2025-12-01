import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Servicios from "./components/Servicios";

import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Servicios />} />
    </Routes>
  );
}
