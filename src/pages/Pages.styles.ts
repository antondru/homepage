import styled from "styled-components";

export const StyledText = styled.p`
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.9em;
  font-weight: 300;

  @media screen and (max-width: 640px) {
    font-size: 0.7em;
  }
`;

export const StyledLink = styled.a`
    color: #FD2155;
    text-decoration: none;

    &:hover {
      text-shadow: 0 0 10px #FD2155;
      transition: 0.5s ease-in-out;
      cursor: pointer;
    }
`;

export const ErrorMessage = styled.p`
  color: #FD2155;
  font-size: 1em;
  font-family: monospace;

  @media screen and (max-width: 640px) {
    font-size: 0.8em;
  }
`;