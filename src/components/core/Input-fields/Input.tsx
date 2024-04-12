import React from 'react';
import classes from './Input.module.scss';

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password';
  label: string;
  placeholder: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, label, placeholder, value, onChange }) => {
  return (
    <div className={`${classes['c-input']}`}>
      <p>{label}</p>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${classes['c-input__field']}`}
      />
    </div>
  );
};

export default Input;
