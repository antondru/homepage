import styled from "styled-components";

export const StyledInput = styled.input`
  color: white;
  background: #141517;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #141517;
  font-family: monospace;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #bca26c;
    box-shadow: 0 0 1px #bca26c;
    transition: border-color 0.5s ease-in-out;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const StyledLabel = styled.label`
  font-family: 'Open Sans', sans-serif;
  color: #bca26c;
  font-size: 0.9em;
  width: 50px;

  @media screen and (max-width: 640px) {
    font-size: 0.8em;
  }
`;