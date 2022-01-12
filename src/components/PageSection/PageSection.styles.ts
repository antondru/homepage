import styled from 'styled-components'

export const SectionHeader = styled.h1`
  font-size: 4em;
  font-weight: 600;
  font-family: 'Staatliches', cursive;
  color: #E4E6EB;
  margin: 0;
  border-bottom: 2px solid #141517;

  // TODO: effekter på rubrik...
  &:hover {
        /* filter: drop-shadow(0 0 5px #08fdd8);
        transition: 0.5s ease-in-out; */
    }

  @media (max-width: 1024px) {
    font-size: 3em;
  }

  @media (max-width: 640px) {
    font-size: 2.5em;
    border-bottom: none;
  }
`;

export const SubHeader = styled.h2`
  margin: 0;
  font-size: 1.5em;
  font-weight: 600;
  font-family: 'Staatliches', cursive;
  color: #E4E6EB;
`;

// export const ThreeDEffectText = styled.span`
//     color: #FD2155;
//   	text-shadow:
// 		-1px 1px 0 #08fdd8,
// 		-2px 2px 0 #08fdd8,
// 		-3px 3px 0 #08fdd8,
// 		0px 1px 1px rgba(0,0,0,.4),
// 		0px 2px 2px rgba(0,0,0,.3),
// 		-1px 3px 3px rgba(0,0,0,.2),
// 		-1px 5px 5px rgba(0,0,0,.1),
// 		-2px 8px 8px rgba(0,0,0,.1),
// 		-2px 13px 13px rgba(0,0,0,.1)
// 		;
// `;

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
      padding-top: 0.5em; 
      width: 100%;
    }
    
    @media (max-width: 320px) {
      border: none;
      border-radius: none;
      background: none;
      box-shadow: none;
      padding-top: 0.5em;
      width: 100%;
      padding: 0;
    }
`;

export const BlinkingLetter = styled.span`
    color: #FD2155;
    animation: animate 0.7s linear infinite;
    text-shadow: 0 0 5px #FD2155;

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