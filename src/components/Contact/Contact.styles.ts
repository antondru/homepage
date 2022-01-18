import styled from "styled-components";
import { StyledText } from "../../pages/Pages.styles";

/* container for entire contact section */
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

/* container for text */
export const ContactInfoText = styled.div`
  margin-bottom: 2em;
`;

/* container for label and input field */
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5em;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 0.1em;
  }
`;

/* container for button */
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: left;
  gap: 2em;

  @media (max-width: 1024px) {
    flex-direction: row;
    gap: 2em;
  }

  @media (max-width: 620px) {
    flex-direction: column;
    gap: 1em;
  }
`;

export const MessageSentText = styled(StyledText)`
  font: var(--text);
  font-size: 0.8em;
  color: var(--lightGreen);
  animation: fadeIn 1s;
  -moz-animation: fadeIn 1s;
  -o-animation: fadeIn 1s;
  -ms-animation: fadeIn 1s;

  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
`;

/* form */
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media (max-width: 1024px) {
      gap: 0.7em;
  }
`;

/* container for error msg for input fields */
export const ErrorMsgContainerInputField = styled.div`
  font-size: 1em;
  height: 20px;

  @media (max-width: 320px) {
      height: 18px;
  }
`;

/* container for error msg for message field */
export const ErrorMsgContainerMessageField = styled.div`
  height: 20px;
  margin-bottom: 1em;
  font-size: 1em;    

  @media (max-width: 1024px) {
      height: 20px;
  }

  @media (max-width: 320px) {
      height: 18px;
  }
`;