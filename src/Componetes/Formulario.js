import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Formulario = ({ crearCitas }) => {
  //CREAR State PARA CITAS
  const [cita, actualizarCita] = useState({
    mascota: "",
    dueño: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const [error, actualizarError] = useState(false);

  //FUNCION QUE SE EJECUTA CADA QUE EL USUARIO ESCRIBE EN UN INPUT
  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //EXTRAER LOS VALORES
  const { mascota, dueño, fecha, hora, sintomas } = cita;
  //CUANDO EL USUARIO PRESIONA AGREGAR CITA
  const submitCita = (e) => {
    e.preventDefault();
    console.log("Enviando form...");
    //VALIDAR
    if (
      mascota.trim() === "" ||
      dueño.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    //ELIMINAR MENSAJE DE ERROR
    actualizarError(false);
    //ASIGNAR ID
    //const { v4: uuidv4 } = require("uuid");
    cita.id = uuidv4();
    console.log(cita);
    //CREAR CITA
    crearCitas(cita);

    //REINICIAR EL FORM
    actualizarCita({
      mascota: "",
      dueño: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };
  return (
    <Fragment>
      <h2>CREAR CITA</h2>

      {error ? (
        <p className="alerta-error">LLENAR LOS CAMPOS OBLIGATRIOS</p>
      ) : null}
      <form onSubmit={submitCita}>
        <label>Nombre de la Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Dueño</label>
        <input
          type="text"
          name="dueño"
          className="u-full-width"
          placeholder="Dueño"
          onChange={actualizarState}
          value={dueño}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Sintomas</label>
        <textarea
          type="text"
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          AGREGAR
        </button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
  crearCitas: PropTypes.func.isRequired,
};
export default Formulario;
