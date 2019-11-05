import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="numberBtn btn" value={props.value} onClick={() => (props.curDisplay === 0) ? props.update(props.value) : props.update(props.curDisplay + props.value)}>
        {props.value}
      </button>
    </>
  );
};

export default NumberButton;
