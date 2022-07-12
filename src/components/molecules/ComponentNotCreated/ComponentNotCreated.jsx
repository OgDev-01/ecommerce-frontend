import React from "react";

export const ComponentNotCreated = ({ component }) => {
  return (
    <div className='container'>
      Component{" "}
      <span style={{ color: "red" }}>
        <strong>{component}</strong>
      </span>{" "}
      has not been created yet!!
    </div>
  );
};
