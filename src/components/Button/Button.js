import React from 'react';
import './styles.css';

const Button = (props) => {
  return (
    <button type="button" className="button" onClick={ () => props.callback() }> 
      {props.text}
    </button>
  )
}

export default Button;