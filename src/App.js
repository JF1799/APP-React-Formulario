import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./Componetes/Formulario";
import Cita from "./Componetes/Cita";

function App() {
  //CITAS ALMACENADAS EN LOCAL STORAGE
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //ARREGLO DE CITAS
  const [citas, guardarCitas] = useState([]);

  //
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas, citasIniciales]);
  //FUNCION PARA AGREGAR CITAS ACTUALES  Y AGREGAS NUEVAS
  const crearCitas = (cita) => {
    guardarCitas([...citas, cita]);
    console.log(guardarCitas);
  };

  //FUNCION PARA ELIMINAR  CITAS
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  //titulo de citas
  const titulo = citas.length === 0 ? "NO HAY CITAS" : "CITAS";

  return (
    <Fragment>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCitas={crearCitas} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
