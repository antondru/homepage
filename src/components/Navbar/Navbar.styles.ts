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
  height: 4vh;
  background-color: #1c1e21; 
  align-items: center;
  padding: 0;
  padding-bottom: 1em;

  @media screen and (max-width: 640px) {
    justify-content: center; 
    height: 5vh;
    background-color: #141517;
    padding-bottom: 0;
  }
`;

export const NavIconLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5em;
  margin-left: 2em;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const NavIconLink = styled.a`
  text-decoration: none;
  color: #E4E6EB;
  font-size: 2em;

  &:hover {
        color: #bca26c;
        filter: drop-shadow(0 0 1px #bca26c);
        transition: 0.5s ease-in-out;
  }
`;

export const NavMenu = styled.nav`
  margin: 0;
`;

export const NavUnorderedList = styled.ul`
  display: inline-block; 
  flex-direction: row;
  list-style: none;
  color: #E4E6EB;
  cursor: pointer;
  /* font-family: 'Roboto Mono', monospace; */
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 1em;
  padding-left: 0px;

  .active {
    font-weight: 1000;
    color: #bca26c;
    text-shadow: 0 0 1px #bca26c;
  }

  li {
    display: inline-block;
    text-align: center;
    width: auto;
    border-right: 4px solid #bca26c;
    text-transform: uppercase;
    padding-right: 20px;
    padding-left: 20px;
    letter-spacing: 0.2rem;

    &:last-child {
      border-right: none;
      padding-right: none;
    }

    @media screen and (max-width: 640px) {
      border-right: 1px solid #bca26c;
    }

  }

  @media screen and (max-width: 640px) {
    justify-content: center;
    width: 100%;
    padding-left: 0px;
    font-size: 0.8em;
  }
`;

export const StyledNavLink = styled.a`
  text-decoration: none;

  &:hover {
    color: #bca26c;
    text-shadow: 0 0 5px #bca26c;
    animation: fadeIn 1s;
  
    @keyframes fadeIn {
    from {
      color: #E4E6EB;
    }
    to {
      color: #bca26c;
    } */
  }
`;

// export const StyledNavLink = styled(NavLink)`
//   text-decoration: none;
//   font-size: 1.5rem;
//   font-weight: 400;
//   color: var(--lightGrey);

//   &.active {
//     font-weight: 800;
//     color: var(--aquamarine);
//     border-bottom: solid 1px var(--lightGrey);
//     text-shadow: 0 0 30px var(--aquamarine);
//     transition: 0.5s ease-in-out;
//   }

//   &:hover {
//     text-shadow: 0 0 30px var(--white);
//     color: var(--white);
//   }
//   @media screen and (max-width: 640px) {
//     font-size: 3em;
//   }
// `;
