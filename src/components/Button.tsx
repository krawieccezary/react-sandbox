import React, { FunctionComponent, MouseEventHandler } from 'react';

type ButtonProps = { 
  extraStyles: String,
  type: 'button' | 'submit' | 'reset',
  click?: MouseEventHandler,
}

const Button: FunctionComponent<ButtonProps> = ({ extraStyles, type, children, click }) => (
  <button 
    className={`transition font-semibold py-2 px-5 rounded ${extraStyles}`} 
    type={type}
    onClick={click}
  >
    {children}
  </button>
)

export default Button;