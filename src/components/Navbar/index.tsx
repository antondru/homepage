import React from "react";

// Styles
import { Wrapper, NavUnorderedList, NavMenu, } from './Navbar.styles';

export const Navbar = () => {
    return (
        <Wrapper>
            {/* <StyledLogoLink to="/">
                <Logo><GiRock /><FaRegHandPaper /><GiScissors /></Logo>
            </StyledLogoLink>            */}
            <NavMenu>
                <NavUnorderedList>
                    <li>
                        Contact
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                      Info
                    </li>    
                </NavUnorderedList>
            </NavMenu>
        </Wrapper>
    );
}
