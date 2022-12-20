import React from "react";

function Alert(props) {
  return (
    <div>
      <div className={`alert alert-${props.alertType}`} role="alert">
        {props.message}
      </div>
    </div>
  );
}

export default Alert;
