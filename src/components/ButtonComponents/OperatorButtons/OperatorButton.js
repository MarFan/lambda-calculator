import React from "react";

const OperatorButton = (props) => {
  const btnProps = props.btnProps;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="operatorBtn btn" title={btnProps.hint} onClick={() => props.operatorClick(btnProps.value)}>{btnProps.char}</button>
    </>
  );
};

export default OperatorButton;