import React from "react";

import "./Error.css";

function Error(props) {
  return (
    <div className="error-container" onClick={props.onClick}>
      <div className="error-message">
        <h1>Something went wrong!</h1>
        <p>Try again.</p>
      </div>
    </div>
  );
}

export default Error;
