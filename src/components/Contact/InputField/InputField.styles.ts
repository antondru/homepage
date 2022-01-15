import styled from "styled-components";

export const StyledInput = styled.input`
  color: white;
  background: var(--darkGrey);
  padding: 10px;
  border-radius: 3px;
  border: 1px solid var(--darkGrey);
  font-family: monospace;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--offWhite);
    box-shadow: 0 0 1px var(--offWhite);
    transition: border-color 0.5s ease-in-out;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

`;

export const StyledLabel = styled.label`
  font-family: 'Open Sans', sans-serif;
  color: var(--offWhite);
  font-size: 0.7em;
  width: 50px;

  @media screen and (max-width: 1024px) {
    font-size: 0.7em;
  }
`;