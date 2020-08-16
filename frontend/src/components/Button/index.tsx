import React, { ButtonHTMLAttributes } from 'react';

import './styles.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ name, className, ...rest }) => {
  return (
    <>
      <button className={className} {...rest}>
        {name}
      </button>
    </>
  );
}

export default Button;
