import { StyledLabel } from "../InputField/InputField.styles";
import { CharacterCountDiv, StyledTextArea } from "./MessageField.styles";

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
    <div id="messageDiv">
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <div className="textarea">
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
      </div>   
    </div> 
  );
};