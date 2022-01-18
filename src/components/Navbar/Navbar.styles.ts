import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  position: -webkit-sticky; /* Safari */
  overflow: hidden;
  bottom: 0;
  z-index: 999;
  width: 100%;
  height: 6vh;
  background-color: #1a1a1a;
  opacity: 0.95;
  align-items: center;

  @media (hover: none) {
    justify-content: center; 
    height: 4vh;
    background-color: black;
  } 

  @media screen and (max-width: 250px) {
    display: none;
  }
`;

export const NavIconLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  padding-right: 5vw;

  @media (hover: none) {
    display: none;
  }
`;

export const NavIconLink = styled.a`
  text-decoration: none;
  color: var(--offWhite);
  font-size: 1.5em;

  @media (hover) {
    &:hover {
      color: var(--lightGreen);
      transition: 0.5s ease-in-out;
    }
  }
`;

export const NavMenu = styled.nav`
  margin: 0;
`;

export const NavUnorderedList = styled.ul`
  display: inline-block; 
  list-style: none;
  color: var(--offWhite);
  cursor: pointer;
  font-family: var(--text);
  font-weight: 400;
  font-size: 0.8em;
  padding: 0;
  padding-left: 5vw;

  @media (hover: none) {
    padding-left: 0;
  }

  .active {
    font-weight: 600;
    text-shadow: 0 0 1px var(--lightGreen);
    color: var(--lightGreen);

    // fix for now until I implement hamburger menu since the active class doesn't work well on mobile with the intersection observer etc. doesn't highlight nav items on scroll on mobile devices.
    @media (hover: none) { 
      font-weight: 600;
      text-shadow: none;
      color: var(--lightGreen);
    }
  }

  li {
    display: inline-block;
    text-align: center;
    width: auto;
    border-right: 2px solid var(--lightGreen);
    text-transform: uppercase;
    padding-right: 20px;
    padding-left: 20px;
    letter-spacing: 0.2rem;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      border-right: none;
      padding-right: 0;
    }

    @media screen and (max-width: 1024px) {
      border-right: 1px solid var(--lightGreen);
      font-size: 0.9em;
      padding-right: 10px;
      padding-left: 10px;
    }
  }

  @media (hover: none) {
    justify-content: center;
    width: 100%;
    padding-left: 0px;
    font-size: 0.8em;
  }
`;

export const StyledNavLink = styled.a`
  text-decoration: none;

  @media (hover) {
    &:hover {
      color: var(--offWhite);
      text-shadow: 0 0 5px var(--offWhite);
    }
  }
`;