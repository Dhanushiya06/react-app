import React, { useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import InputComponent from "./components/InputComponent";

const App = () => {
  const [firstNum, setFirstNum] = useState(24);
  const [secondNum, setSecondNum] = useState(23);
  const handleClickOne = (event) => {
    setFirstNum(parseInt(event.target.value));
  };
  const handleClick = (event) => {
    setSecondNum(parseInt(event.target.value));
    ;
  };
  return (
    <div>
      <InputComponent number={firstNum} handleClick={handleClickOne} />
      <InputComponent number={secondNum} handleClick={handleClick} />
      <ButtonComponent number onclick={handleClick}/>
      <p>{firstNum+secondNum}
    </div>
  );
};

export default App;
