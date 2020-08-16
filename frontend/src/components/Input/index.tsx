import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;
  className: string;
}

const Input: React.FC<InputProps> = ({ name, label, type, className, ...rest }) => {
  return (
    <>
      <div className={className}>
        <label htmlFor={name}>{label}</label>
        <input type={type} id={name} {...rest} />
      </div>
    </>
  );
}

export default Input;
