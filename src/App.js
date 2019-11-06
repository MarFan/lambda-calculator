import React, { useState } from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

import Display from "./components/DisplayComponents/Display";
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [calcDisplay, setCalcDisplay] = useState(0);
  const [firstNum, setFirstNum] = useState(undefined);
  const [myOperator, setMyOperator] = useState(undefined);
  
  function displayUpdate(num) {
    if(calcDisplay === 0){
      setCalcDisplay(num);
    } else {
      setCalcDisplay(calcDisplay + num)
    }
  }

  function operatorPress(op) {
    setFirstNum(calcDisplay);

    if(op !== '='){
      setMyOperator(op)
      setCalcDisplay(0);
    }else{
      setCalcDisplay(eval(firstNum +''+ myOperator +''+ calcDisplay))
    }
    
  }

  function specialPress(special) {
    switch(special) {
      case 'C':
        setCalcDisplay(0)
        break;
      case '+/-':
        setCalcDisplay(calcDisplay - (calcDisplay * 2));
        break;
      case '%':
        //setFirstNum(calcDisplay);
        setCalcDisplay(calcDisplay * .1);
        break;
      default:
        break;
    }
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display calcDisplay={calcDisplay} />
        <div className="btnContainer">
          <div className="specialNums">
            <Specials specialClick={specialPress} />
            <Numbers displayUpdate={displayUpdate} />
          </div>
          <div className="operators">
            <Operators operatorClick={operatorPress} />
          </div>        
        </div>
      </div>
    </div>
  );
}

export default App;
