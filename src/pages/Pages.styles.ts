import styled from "styled-components";

export const StyledText = styled.p`
  color: #ffffff;
  font-family: var(--text);
  font-size: 1em;
  font-weight: 300;

  @media screen and (max-width: 640px) {
    font-size: 0.8em;
  }
`;

export const StyledLink = styled.a`
    color: var(--lightGreen);
    text-decoration: none;

    &:hover {
      text-shadow: 0 0 10px var(--lightGreen);
      transition: 0.5s ease-in-out;
      cursor: pointer;
    }
`;

export const ErrorMessage = styled.p`
  color: var(--red);
  font-size: 1em;
  font-family: monospace;

  @media screen and (max-width: 640px) {
    font-size: 0.8em;
  }
`;