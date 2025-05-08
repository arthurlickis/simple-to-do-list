import React from "react";
import PropTypes from "prop-types";

import "./Errors.css";

export default function Errors({ errors }) {
  return (
    <>
      {errors.length > 0 && (
        <div className="error-messages">
          {errors.map((error) => (
            <span key={error}>{error} </span>
          ))}
        </div>
      )}
    </>
  );
}

Errors.propTypes = {
  errors: PropTypes.array.isRequired,
};
