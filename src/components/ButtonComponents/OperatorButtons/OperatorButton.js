import React from "react";

const OperatorButton = (props) => {
  const btnProps = props.btnProps;
  const calcDisplay = props.curDisplay.display;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="operatorBtn btn" title={btnProps.hint} onClick={() => {console.log(calcDisplay, btnProps.value, calcDisplay)}}>{btnProps.char}</button>
    </>
  );
};

export default OperatorButton;