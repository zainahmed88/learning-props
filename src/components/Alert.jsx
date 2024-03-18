import React from "react";

const Alert = (props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>My Alert!</strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={props.onClose}
      ></button>
    </div>
  );
};

export default Alert;
