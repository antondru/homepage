import styled from "styled-components";

export const StyledText = styled.p`
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-size: 1em;

  @media screen and (max-width: 640px) {
    font-size: 0.8em;
  }
`;

export const StyledLink = styled.a`
    color: #bca26c;
    text-decoration: none;
    font-weight: 800;

    &:hover {
    text-shadow: 0 0 10px #bca26c;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1em;
  font-family: monospace;
  animation: fadeIn 1s;
  
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