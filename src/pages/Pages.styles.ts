import styled from "styled-components";

/* did this to be able to "flip" the upwards scroll text */
type VerticalLinkContainerProps = {
  upwards: boolean;
}

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5vh;
  padding-top: 5vh;
  padding-bottom: 5vh;

  @media (hover: none) {
    gap: 20vh;
    padding-top: 5vh;
    padding-bottom: 5vh;

    /* tablets */
    @media (min-width: 768px) {
      gap: 40vh;
      padding-left: 5vh;
      padding-top: 20vh;
      padding-bottom: 20vh;
    }

    /* tablets */
    @media (min-width: 820px) {
      gap: 45vh;
      padding-left: 5vh;
      padding-top: 20vh;
      padding-bottom: 20vh;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 1em;
`;

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

  @media (hover) {
    &:hover {
      text-shadow: 0 0 10px var(--lightGreen);
      transition: 0.5s ease-in-out;
      cursor: pointer;
    }
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

/* did this to be able to "flip" the upwards scroll text */
export const VerticalLinkContainer = styled.div<VerticalLinkContainerProps>`
  width: 20px;
  height: 60px;
  line-height: 20px;
  text-align: center;
  transform: rotate(${props => props.upwards ? '180deg' : ''});
  margin-bottom: ${props => props.upwards ? '35px' : ''};
  margin-top: ${props => props.upwards ? '' : '35px'};

  @media (hover: none) {
    display: none;
  }
`;

export const VerticalLink = styled.a`
  letter-spacing: 0.1em;
  cursor: pointer;
  display: inline-block;
  font-size: 0.8em;
  color: var(--lightGrey);
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