import React from 'react';
import './Input.css'

const Input = (props) => {
  return (
    <div>
      <input className='input-component' placeholder={props.placeholder} type={props.type} />
    </div>
  )
}

export default Input;
;