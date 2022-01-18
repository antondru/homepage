import styled from 'styled-components'

export const SectionHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid var(--darkGrey);
  
  @media (hover: none) {
    border-bottom: none;
  }
`;

export const Icon = styled.div`
  opacity: 0.8;
  color: var(--grey);
  font-size: 4em;

  @media (hover: none) {
    opacity: 0.5;
    color: var(--darkGrey);
  }

  @media (max-width: 1024px) {
    font-size: 3em;
  }

  @media (max-width: 640px) {
    font-size: 2.2em;
  }
`;

export const SectionHeader = styled.h1`
  text-transform: uppercase;
  font-size: 4em;
  font-weight: 600;
  font-family: var(--heading);
  color: var(--offWhite);
  margin: 0;

  @media (hover) {
    &:hover {
      text-shadow: 0 0 5px var(--lightGreen);
      transition: 0.5s ease-in-out;
    }
  }

  @media (max-width: 1024px) {
    font-size: 3em;
  }

  @media (max-width: 640px) {
    font-size: 2.2em;
  }
`;

export const StyledLetter = styled.span`
  background-color: var(--lightGreen);
  background-image: linear-gradient(45deg, var(--darkGreen), var(--lightGreen));
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
`;

export const SubHeader = styled.h2`
  text-transform: uppercase;
  margin: 0;
  font-size: 1.5em;
  font-weight: 600;
  font-family: var(--heading);
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
  border-radius: 3px;
  padding-top: 2vw;
  display: flex;
  flex-direction: column;
  gap: 2em;
  background: #141414; 
  width: 100%; 
  padding: 1em 1em 1em 1em;

  @media (hover: none) {
    gap: 0.7em;
    background: none;
    box-shadow: none;
    margin-top: 1em;
    width: 150%;
  }
`;