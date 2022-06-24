import React from 'react';
import './Input.css'

const Input = (props, {...rest}) => {
  return (
    <div>
      <input className='input-component' {...rest} placeholder={props.placeholder} type={props.type} />
    </div>
  )
}

export default Input;
;