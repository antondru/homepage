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
  background-color: #1c1e21; 
  align-items: center;

  @media screen and (max-width: 1024px) {
    justify-content: center; 
    height: 4vh;
    background-color: #141517;
    /* padding-bottom: 0; */
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

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavIconLink = styled.a`
  text-decoration: none;
  color: #E4E6EB;
  font-size: 1.5em;

  &:hover {
    color: #08fdd8;
    filter: drop-shadow(0 0 1px #08fdd8);
    transition: 0.5s ease-in-out;
  }
`;

export const NavMenu = styled.nav`
  margin: 0;
`;

export const NavUnorderedList = styled.ul`
  display: inline-block; 
  list-style: none;
  color: #E4E6EB;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 0.8em;
  padding: 0;
  padding-left: 5vw;
  /* padding-right: 5vw; */

  @media screen and (max-width: 1024px) {
      padding-left: 0;
  }

  .active {
    font-weight: 600;
    color: #08fdd8;
    text-shadow: 0 0 1px #08fdd8;
  }

  li {
    display: inline-block;
    text-align: center;
    width: auto;
    border-right: 2px solid #FD2155;
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
      border-right: 1px solid #FD2155;
      font-size: 0.9em;
      padding-right: 10px;
      padding-left: 10px;
    }

  }

  @media screen and (max-width: 1024px) {
    justify-content: center;
    width: 100%;
    padding-left: 0px;
    font-size: 0.8em;
  }
`;

export const StyledNavLink = styled.a`
  text-decoration: none;

  &:hover {
    color: #08fdd8;
    text-shadow: 0 0 5px #08fdd8;
    animation: fadeIn 1s;
  
    @keyframes fadeIn {
    from {
      color: #E4E6EB;
    }
    to {
      color: #08fdd8;
    } */
  }
`;