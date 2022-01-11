import styled from 'styled-components'

export const SectionHeader = styled.h1`
  letter-spacing: 0.1em;
  font-size: 4em;
  font-family: 'Londrina Solid', cursive;
  color: #E4E6EB;

  // TODO: effekter på rubrik...
  &:hover {
        /* filter: drop-shadow(0 0 5px #bca26c);
        transition: 0.5s ease-in-out; */
    }

  @media (max-width: 640px) {
    font-size: 2.2rem;
  }
`;