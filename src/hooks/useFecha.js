import { useState, useEffect } from "react";

export const useFecha = () => {
  const [fecha, setFecha] = useState();

  useEffect(() => {
    const fechaActual = new Date();

    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    setFecha(fechaActual.toLocaleDateString("es-ES", options));
  }, []);

  return { fecha };
};
