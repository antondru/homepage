import { StyledLabel } from "../InputField/InputField.styles";
import { CharacterCountDiv, MessageContainer, StyledTextArea, TextAreaContainer } from "./MessageField.styles";

type Props = {
  placeholder: string;
  name: string;
  value: string;
  onChange: Function; 
  onBlur: Function;
  id: string;
  label: string;
  characterCount: number;
};

export const MessageField = ({ placeholder, name, value, onChange, id, label, characterCount, onBlur }: Props) => {
  return (
    <MessageContainer id="message-container">
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <TextAreaContainer className="textarea-container">
        <StyledTextArea
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          onBlur={(e) => onBlur(e)}
          value={value}
          maxLength={250}
        />
        <CharacterCountDiv>{characterCount}/250</CharacterCountDiv>  
      </TextAreaContainer>   
    </MessageContainer> 
  );
};