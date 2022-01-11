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
    border-color: #08fdd8;
    box-shadow: 0 0 1px #08fdd8;
    transition: border-color 0.5s ease-in-out;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

`;

export const StyledLabel = styled.label`
  font-family: 'Open Sans', sans-serif;
  color: #08fdd8;
  font-size: 0.7em;
  width: 50px;

  @media screen and (max-width: 1024px) {
    font-size: 0.7em;
  }
`;