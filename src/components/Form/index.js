import React from "react";
import { FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";

import "./Form.css";

// os parametros são as props
export default function Form({ handleChange, handleSubmit, newTask }) {
  return (
    <form action="#" onSubmit={handleSubmit} className="form">
      <input onChange={handleChange} type="text" value={newTask} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};
