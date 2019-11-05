import React, { useState } from "react";

//import any components needed
import OperatorButton from './OperatorButton';

//Import your array data to from the provided data file
import { operators } from '../../../data'

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorArray] = useState(operators);
  const [firstOp] = useState();
  const [firstNum] = useState()
  const [secondNum] = useState();

  return (
    <>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

       {
         operatorArray.map(op => (
           <OperatorButton key={op.char} curDisplay={props} btnProps={op} />
         ))
       }
    </>
  );
};

export default Operators;
