import React, { useState } from "react";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 

import Button from './NumberButton';

import { numbers } from '../../../data'

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberState] = useState(numbers);
  
  return (
    <>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {
          numberState.map(num => (
             <Button key={num} value={num} displayUpdate={props.displayUpdate} />
          ))
       }
    </>
  );
};

export default Numbers;
