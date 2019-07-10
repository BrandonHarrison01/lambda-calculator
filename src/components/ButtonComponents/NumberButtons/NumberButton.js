import React from "react";

import './NumberButton.scss'

const NumberButton = props => {
  return (
    <button className='numberButton' onClick={() => props.inputNumber(props.number)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number}
    </button>
  );
};

export default NumberButton
