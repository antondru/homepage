import styled from "styled-components";

export const StyledText = styled.p`
  color: var(--white);
  font-family: var(--text);
  font-size: 0.9em;
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

export const VerticalLink = styled.a`
  cursor: pointer;
  display: inline-block;
  font-size: 0.8em;
  padding-left: 2em;
  color: var(--medGrey);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  animation-name: bounce;
  -webkit-animation-name: bounce;
  animation-duration: 1.5s;
  -webkit-animation-duration: 1.5s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;

  @keyframes bounce {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    50% {
      -webkit-transform: translateY(-15px);
      transform: translateY(-10px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @media (hover: none) {
    display: none;
  }
`;