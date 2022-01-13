import styled from "styled-components";

/* container */
export const MessageContainer = styled.div`
  align-items: top;
  display: flex;
  flex-direction: row;
  gap: 1.5em;

  @media (max-width: 1024px) {
    align-items: top;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
`;

export const TextAreaContainer = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    text-align: right; // for char counter

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

/* text area */
export const StyledTextArea = styled.textarea`
    height: 200px;
    color: white;
    background: #0f0f0f;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #0f0f0f;
    resize: none;
    width: 100%;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #E4E6EB;
        box-shadow: 0 0 1px #E4E6EB;
        transition: border-color 0.5s ease-in-out;
    }

    @media screen and (max-width: 1024px) {
        height: 100px;
    }
`;

/* div for character count below message box */
export const CharacterCountDiv = styled.div`
    color: #c4c4c4;
    font-size: 0.8em;

    @media screen and (max-width: 1024) {
    font-size: 0.6em;
    }
`;