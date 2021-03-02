import React, { useState } from "react";
import Fecha from "./fecha";
import ClimaDia from "./climaDia";
import Geolocalizacion from "./Geolocalizacion";

const Header = ({
  obtenerclima,
  dataClima,
  geolocalizacion,
  setMensajeBusquedaFallo,
  mensajeBusquedaFallo,
  setLoading,
}) => {
  const [input, setInput] = useState("");

  const inputValue = (e) => {
    setInput(e.target.value);
  };

  const ValidateForm = (e) => {
    e.preventDefault();
    setLoading(true);
    if (input.trim() === "") {
      setMensajeBusquedaFallo(true);
      setLoading(false);
    } else {
      obtenerclima(input);
      setMensajeBusquedaFallo(false);
    }
  };

  return (
    <>
      <div>
        <Fecha />
      </div>

      <div className="container-header">
        <input className="c-checkbox" type="checkbox" id="checkbox" />
        <div className="c-formContainer">
          <div className="c-form">
            <input
              className="c-form__input"
              placeholder="Ciudad"
              type="text"
              onChange={inputValue}
            />
            <label className="c-form__buttonLabel" htmlFor="checkbox">
              <button
                className="c-form__button"
                onClick={ValidateForm}
                type="button"
              >
                Buscar
              </button>
            </label>
            <label
              className="c-form__toggle"
              htmlFor="checkbox"
              data-title="Buscar Ciudad"
            ></label>
          </div>
        </div>
      </div>
      {mensajeBusquedaFallo ? (
        <div className="container-mensaje-busqueda">
          <p>No hay resultado para la busqueda</p>
        </div>
      ) : dataClima ? (
        <>
          <div>
            <ClimaDia dataClima={dataClima} />
          </div>
        </>
      ) : null}

      {geolocalizacion && !dataClima ? (
        <div>
          <Geolocalizacion geolocalizacion={geolocalizacion} />
        </div>
      ) : null}
    </>
  );
};

export default Header;
