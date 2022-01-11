import styled from "styled-components";

export const StyledText = styled.p`
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.9em;
  font-weight: 300;

  @media screen and (max-width: 640px) {
    font-size: 0.8em;
  }
`;

export const StyledLink = styled.a`
    color: #08fdd8;
    text-decoration: none;

    &:hover {
    text-shadow: 0 0 10px #08fdd8;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1em;
  font-family: monospace;
  animation: fadeIn 0.5s;
  
  @keyframes fadeIn {
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }

    @media screen and (max-width: 640px) {
    font-size: 0.8em;
  }
}

`;