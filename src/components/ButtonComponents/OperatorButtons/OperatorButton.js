import React from "react";

import './OperatorButton.scss'

const OperatorButton = props => {
  return (
    <button className='operatorButton' onClick={() => props.inputNumber(props.operator)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operator}
    </button>
  );
};

export default OperatorButton