import styled from 'styled-components'

export const SectionHeader = styled.h1`
  font-size: 4em;
  font-weight: 600;
  font-family: 'Staatliches', cursive;
  color: var(--offWhite);
  margin: 0;
  border-bottom: 2px solid var(--darkGrey);//#141517;

  // TODO: effekter på rubrik...
  &:hover {
        /* filter: drop-shadow(0 0 5px #08fdd8);
        transition: 0.5s ease-in-out; */
    }

  @media (max-width: 1024px) {
    font-size: 3em;
  }

  @media (max-width: 640px) {
    font-size: 2.2em;
    border-bottom: none;
  }
`;

export const StyledLetter = styled.span`
  color: var(--lightGreen);
  text-shadow: 0 0 5px #03fcad;
`;

export const SubHeader = styled.h2`
  margin: 0;
  font-size: 1.5em;
  font-weight: 600;
  font-family: 'Staatliches', cursive;
  padding-bottom: 5px;
  color: var(--offWhite);

  @media (max-width: 1024px) {
    font-size: 1.3em;
  }

  @media (max-width: 640px) {
    font-size: 1em;
    border-bottom: none;
  }
`;

export const ContentDiv = styled.div`
    border: 1px solid var(--darkGrey);
    border-radius: 8px;
    padding-top: 2vw;
    display: flex;
    flex-direction: column;
    gap: 2em;
    background: #141414; //#181a1c;
    width: auto; // kolla på detta
    padding: 1em 1em 1em 1em;

     @media (max-width: 1024px) {
      padding-top: 0.5em; 
      width: 100%;
      gap: 1em;
    }
    
    @media (max-width: 414px) {
      gap: 0.7em;
      border: none;
      border-radius: none;
      background: none;
      box-shadow: none;
      margin-top: 1em;
      width: 150%;
      padding: 0;
    }
`;

export const BlinkingLetter = styled.span`
    color: var(--lightGreen);
    animation: animate 0.8s linear infinite;
    text-shadow: 0 0 5px #03fcad;
    /* animation-iteration-count: 5; */

    @keyframes animate {
        0% {
            opacity: 0;
        }

        50% {
            opacity: 0.7;
        }

        100% {
            opacity: 0;
        }
    }
`;