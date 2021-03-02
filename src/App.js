import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Error from "./components/Error";

import { Spinner } from "./components/Spinner";

function App() {
  const [dataClima, setDataClima] = useState();

  const [mensajeBusquedaFallo, setMensajeBusquedaFallo] = useState(false);

  const [loading, setLoading] = useState(false);

  const [geolocalizacion, setGeolocalizacion] = useState();

  const [errorApi, setErrorApi] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLoading(true);
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      const coordenadas = async () => {
        try {
          const url = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`
          );

          const data = await url.json();

          if (data.cod === "404" || data.cod === "400") {
            setMensajeBusquedaFallo(true);
            setGeolocalizacion("");
            setLoading(false);
            return;
          }

          setTimeout(() => {
            setGeolocalizacion(data);
            setLoading(false);
          }, 2000);
        } catch (error) {
          setErrorApi(true);
          setLoading(false);
        }
      };

      coordenadas();
    });
  }, []);

  const obtenerclima = async (ciudad) => {
    try {
      const respuesta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&appid=${process.env.REACT_APP_API_KEY}`
      );

      const data = await respuesta.json();

      if (data.cod === "404" || data.cod === "400") {
        setMensajeBusquedaFallo(true);
        setDataClima("");
        setGeolocalizacion("");
        setDataClima("");
        setLoading(false);
        return;
      }

      setTimeout(() => {
        setDataClima(data);
        setLoading(false);
      }, 2000);

      setErrorApi(false);
    } catch (error) {
      setErrorApi(true);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="container-loading">
          <Spinner />
        </div>
      ) : null}
      <Nav />

      {errorApi === true ? (
        <Error errorApi={errorApi} />
      ) : (
        <Header
          obtenerclima={obtenerclima}
          dataClima={dataClima}
          geolocalizacion={geolocalizacion}
          setMensajeBusquedaFallo={setMensajeBusquedaFallo}
          mensajeBusquedaFallo={mensajeBusquedaFallo}
          setLoading={setLoading}
        />
      )}
    </>
  );
}

export default App;
