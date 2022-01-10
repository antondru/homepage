import React from "react";

// Styles
import { Wrapper, NavUnorderedList, NavMenu, StyledNavLink } from './Navbar.styles';

export const Navbar = () => {
    const scrollToElement = (targetElement: string) => {
        document.getElementById(targetElement)?.scrollIntoView({behavior: "smooth"}); // this "fixes" the bug in the navbar where it wont highlight the section being active
      }

    return (
        <Wrapper>
            {/* <StyledLogoLink to="/">
                <Logo><GiRock /><FaRegHandPaper /><GiScissors /></Logo>
            </StyledLogoLink>            */}
            <NavMenu className="navbar">
                <NavUnorderedList>
                    <div className="nav-menu" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <li id="info" data-ref="info">
                            <StyledNavLink onClick={() => {scrollToElement("info")}}>Info</StyledNavLink>
                        </li>
                        <li id="projects" data-ref="projects">
                            <StyledNavLink onClick={() => {scrollToElement("projects")}}>Projects</StyledNavLink>
                        </li>
                        <li id="contact" data-ref="contact">
                        <StyledNavLink onClick={() => {scrollToElement("contact")}}>Contact</StyledNavLink>
                        </li> 
                    </div>    
                </NavUnorderedList>
            </NavMenu>
        </Wrapper>
    );
}
