import React from "react";

const ButtonComponent = ({handleClick }) => {
  return (
    <div>
      <button type="button" className="btn btn-secondary" onChange={handleClick}>
      </button>
    </div>
  );
};

export default ButtonComponent;
