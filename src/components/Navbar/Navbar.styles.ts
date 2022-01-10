import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  position: -webkit-sticky; /* Safari */
  overflow: hidden;
  bottom: 0;
  z-index: 999;
  width: 100%;
  height: 2vh;
  min-height: 50px;
  background-color: #171717;
  align-items: center;
  padding: auto 0;

  /* TODO: FOR MEMES */
  @media screen and (max-width: 640px) {
    /* flex-direction: column; */
    width: 100%;
    justify-content: center;
    font-size: 5px;
  }
`;

// export const StyledLogoLink = styled(NavLink)`
//   text-decoration: none;
// `;

// export const Logo = styled.h1`
//   color: var(--aquamarine);
//   font-family: 'Bangers', cursive;
//   letter-spacing: 0.3rem;
//   display: flex;
//   justify-content: flex-start;
//   font-size: 3em;
//   text-shadow: 0 0 20px var(--aquamarine);

//   &:hover {
//     text-shadow: 0 0 50px var(--aquamarine);
//     transition: 0.5s ease-in-out;
//   }
// `;

export const NavMenu = styled.nav`
  display: flex;
  margin: 0 auto;
  justify-content: flex-end;
`;

export const NavUnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin-right: 3em;
  color: white;

  li {
    text-transform: uppercase;
    margin: 0 10px;
    letter-spacing: 0.2rem;
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
