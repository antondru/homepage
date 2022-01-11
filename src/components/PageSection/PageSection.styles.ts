import styled from 'styled-components'

export const SectionHeader = styled.h1`
  font-size: 4em;
  font-weight: 600;
  font-family: 'Staatliches', cursive;
  color: #E4E6EB;
  margin: 0;
  // TODO: effekter på rubrik...
  &:hover {
        /* filter: drop-shadow(0 0 5px #08fdd8);
        transition: 0.5s ease-in-out; */
    }

  @media (max-width: 1024px) {
    font-size: 3em;
  }
`;

export const ContentDiv = styled.div`
    border: 1px solid black;
    border-radius: 8px;
    padding-top: 2vw;
    display: flex;
    flex-direction: column;
    gap: 2em;
    background: #181a1c;
    box-shadow: 4px 8px #141517;
    width: auto; // kolla på detta
    padding: 1em 1em 1em 1em;

    @media (max-width: 1024px) {
      border: none;
      border-radius: none;
      background: none;
      box-shadow: none;
      padding-top: 0.5em;
      /* padding-left: 4em; */
      width: 100%;
    }

    @media (max-width: 320px) {
      border: none;
      border-radius: none;
      background: none;
      box-shadow: none;
      padding-top: 0.5em;
      /* padding-left: 2em; */
      width: 100%;
    }
`;