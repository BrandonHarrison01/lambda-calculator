import React from "react";

import './OperatorButton.scss'

const OperatorButton = props => {
  return (
    <button className='operatorButton' onClick={() => props.operator.char === '=' ? props.total() : props.inputNumber(props.operator.value)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operator.char}
    </button>
  );
};

export default OperatorButton