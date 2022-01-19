import React from "react";
import { StyledInput, StyledLabel } from "./InputField.styles";

type Props = {
  placeholder: string;
  name: string;
  type: string;
  value: string;
  onChange: Function; 
  onBlur: Function;
  id: string;
  label: string;
};

const Input = ({ placeholder, type, value, onChange, name, id, label, onBlur }: Props) => {
  return (
    <>
      <StyledLabel htmlFor={id}>{label}:</StyledLabel>
      <div className="input">
        <StyledInput
          onBlur={(e) => onBlur(e)}
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          value={value}
          maxLength={35}
        />
      </div>
      </>
  );
};

export default Input;