import React from "react";

import './SpecialButton.scss'

const SpecialButton = props => {
  return (
    <button className='specialButton' onClick={() => props.inputNumber(props.special)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.special}
    </button>
  );
};

export default SpecialButton