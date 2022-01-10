import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: sticky;
  position: -webkit-sticky; /* Safari */
  overflow: hidden;
  bottom: 0;
  z-index: 999;
  width: 100%;
  height: 4vh;
  background-color: #1c1c1c; // #1c1c1c
  align-items: center;
  padding: 0;

  @media screen and (max-width: 640px) {
    justify-content: center;
    width: 100%;
    height: 5vh;
    background-color: #171717;
  }
`;

export const NavMenu = styled.nav`
  /* display: flex; */
  margin: 0;
  /* text-align: center; */
`;

export const NavUnorderedList = styled.ul`
  display: inline-block; // TODO: rätt?
  flex-direction: row;
  list-style: none;
  color: #E4E6EB;
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;
  font-weight: 200;
  font-size: 1em;
  /* align-items: center;
  justify-content: center; */
  padding-left: 0px;

  .active {
    font-weight: 800;
    color: #bca26c;
    text-shadow: 0 0 2px #bca26c;
  }

  li {
    display: inline-block;
    text-align: center;
    width: auto;
    border-right: 4px solid #bca26c;
    text-transform: uppercase;
    padding-right: 20px;
    padding-left: 20px;
    letter-spacing: 0.3rem;

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
