import React from "react";

import { useFecha } from "../hooks/useFecha";

const Fecha = () => {
  const { fecha } = useFecha();

  return (
    <div className="container-fecha">
      <p className="titulo-fecha">Pronóstico</p>

      <p className="texto-fecha">{fecha}</p>
    </div>
  );
};

export default Fecha;
