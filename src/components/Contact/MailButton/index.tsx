import { StyledMailButton } from "./MailButton.styles";

type Props = {
  desc: string
  type?: 'submit' | 'reset' | 'button';
  disabled: boolean
}

export const MailButton = ({ type, desc, disabled } : Props) => {
  return (
      <StyledMailButton disabled={disabled} type={type}> 
        {desc}
      </StyledMailButton>
  );
};