import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="specialBtn btn" onClick={() => props.specialClick(props.value)}>{props.value}</button>
    </>
  );
};

export default SpecialButton;