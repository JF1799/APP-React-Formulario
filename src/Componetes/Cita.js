import React from "react";
import PropTypes from "prop-types";

const Cita = ({ cita, eliminarCita }) => (
  <div className="cita">
    <p>
      NOMBRE:<span>{cita.mascota}</span>
    </p>
    <p>
      DUEÑO:<span>{cita.dueño}</span>
    </p>
    <p>
      FECHA:<span>{cita.fecha}</span>
    </p>
    <p>
      HORA:<span>{cita.hora}</span>
    </p>
    <p>
      SINTOMAS:<span>{cita.sintomas}</span>
    </p>

    <button
      className="button eliminar u-full-width"
      onClick={() => eliminarCita(cita.id)}
    >
      ELIMINAR &times;
    </button>
  </div>
);

Cita.propType = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};
export default Cita;
