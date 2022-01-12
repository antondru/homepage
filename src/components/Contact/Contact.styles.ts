import styled from "styled-components";

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
    font-size: 12px;
    height: 20px;

    @media (max-width: 320px) {
        font-size: 10px;
        height: 18px;
    }
`;

/* container for error msg for message field */
export const ErrorMsgContainerMessageField = styled.div`
    height: 20px;
    margin-bottom: 1em;
    

    @media (max-width: 1024px) {
        font-size: 12px;
        height: 20px;
        margin-bottom: 0em;
    }

    @media (max-width: 320px) {
        font-size: 10px;
        height: 18px;
        margin-bottom: 0em;
    }
`;