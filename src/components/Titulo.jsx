import React from "react";
import BarraBusqueda from "./BarraBusqueda";

const Titulo = () => {
  return (
    <div className="divTitulo">
      <div className="divparatitulo">
        <img
          src="https://th.bing.com/th/id/R.f5198175263394dd3d15cfa67e89f4de?rik=T%2bVgrG%2fjjGbZpw&pid=ImgRaw&r=0"
          alt=""
          className="imgTitulo"
        />
        <h1>Bazar Online</h1>
      </div>

      <BarraBusqueda />
    </div>
  );
};

export default Titulo;
