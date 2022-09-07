import React from "react";

const InputComponent = ({handleClick, number }) => {
  return (
    <div>
      <input type="number" id="number" value={number} onChange={handleClick} />
    </div>
  );
};
export default InputComponent;
