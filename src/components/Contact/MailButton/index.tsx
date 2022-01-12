import React from "react";
import { StyledMailButton } from "./MailButton.styles";

type Props = {
  desc: string
  type?: 'submit' | 'reset' | 'button';
  disabled: boolean
}

export const MailButton = ({ type, desc, disabled } : Props) => {
  return (
    <div className="button">
      <StyledMailButton disabled={disabled} type={type}> 
        {desc}
      </StyledMailButton>
    </div>
  );
};