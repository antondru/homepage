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
    background: var(--darkGrey);
    padding: 10px;
    border-radius: 3px;
    border: 1px solid var(--darkGrey);
    resize: none;
    width: 100%;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: var(--offWhite);
        box-shadow: 0 0 1px var(--offWhite);
        transition: border-color 0.5s ease-in-out;
    }

    @media screen and (max-width: 1024px) {
        height: 100px;
    }
`;

/* div for character count below message box */
export const CharacterCountDiv = styled.div`
    color: var(--offWhite);
    font-size: 0.8em;

    @media screen and (max-width: 1024) {
    font-size: 0.6em;
    }
`;