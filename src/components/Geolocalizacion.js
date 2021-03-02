import React from "react";
import { useFecha } from "../hooks/useFecha";
const Geolocalizacion = ({ geolocalizacion }) => {
  const { fecha } = useFecha();
  const { main, name, weather } = geolocalizacion;

  let tempMax = main.temp_max;
  let tempMin = main.temp_min;

  let icon = weather[0].icon;
  const imagenIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  tempMax = (tempMax - 273.15) * 1;
  tempMin = (tempMin - 273.15) * 1;

  return (
    <div className="container-clima-dia">
      <h3> Ciudad de {name} </h3>
      <p className="parrafo-descripcion-fecha"> {fecha} </p>

      <div className="temp-max-min">
        <p> {tempMax.toFixed(1)} ℃ TEMP MAX </p>
        <p> {tempMin.toFixed(1)} ℃ TEMP MIN </p>
      </div>
      <img src={imagenIcon} width="150" alt="" />
      <p className="parrafo-descripcion-fecha">{weather[0].description}</p>
    </div>
  );
};

export default Geolocalizacion;
