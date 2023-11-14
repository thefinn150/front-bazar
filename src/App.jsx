import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import BarraBusqueda from "./components/BarraBusqueda";
import Productos from "./components/productos";
import DetalleProducto from "./components/DetalleProducto";

import "./App.css";
import Titulo from "./components/Titulo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Titulo />} />
        <Route path="/items" element={<Productos />} />
        <Route path="/item/:id" element={<DetalleProducto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
