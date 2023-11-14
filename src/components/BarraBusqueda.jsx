import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const BarraBusqueda = () => {
  const [filtro, setFiltro] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFiltro(event.target.value);
  };

  const handleBuscar = () => {
    navigate(`/items?q=${filtro}`);
    console.log(filtro);
  };

  return (
    <div className="divBusqueda">
      <input
        type="text"
        name=""
        id=""
        placeholder="Búsqueda"
        value={filtro}
        onChange={handleChange}
        className="inputBusqueda"
      />
      <button onClick={handleBuscar}>Buscar</button>
    </div>
  );
};

export default BarraBusqueda;
