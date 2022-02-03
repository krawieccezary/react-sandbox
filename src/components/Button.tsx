import React, { FunctionComponent } from 'react';

type ButtonProps = { 
  extraStyles: String,
  type: 'button' | 'submit' | 'reset'
}

const Button: FunctionComponent<ButtonProps> = ({ extraStyles, type, children }) => (
  <button 
    className={`transition font-semibold py-2 px-5 rounded ${extraStyles}`} 
    type={type}
  >
    {children}
  </button>
)

export default Button;