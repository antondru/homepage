import styled from "styled-components";

export const StyledInput = styled.input`
  color: white;
  background: #0f0f0f;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #0f0f0f;
  font-family: monospace;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #E4E6EB;
    box-shadow: 0 0 1px #E4E6EB;
    transition: border-color 0.5s ease-in-out;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

`;

export const StyledLabel = styled.label`
  font-family: 'Open Sans', sans-serif;
  color: #E4E6EB;
  font-size: 0.7em;
  width: 50px;

  @media screen and (max-width: 1024px) {
    font-size: 0.7em;
  }
`;