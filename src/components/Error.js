import React from "react";

const Error = ({ errorApi }) => {
  return errorApi === true ? (
    <div className="container-error">
      <p> Ha ocurrido un error,por favor inténtelo de nuevo más tarde </p>
    </div>
  ) : null;
};

export default Error;
