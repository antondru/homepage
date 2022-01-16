import { NavMenuIconLink } from './NavIconLink';

// Icons
import { BsGithub, BsLinkedin } from 'react-icons/bs';

// Styles
import { Wrapper, NavUnorderedList, NavMenu, StyledNavLink, NavIconLinkContainer } from './Navbar.styles';

export const Navbar = () => {
    const scrollToElement = (targetElement: string) => {
        document.getElementById(targetElement)?.scrollIntoView({behavior: "smooth"}); // this "fixes" the bug in the navbar where it wont highlight the section being active
    }

    return (
        <Wrapper>
            <NavMenu className="navbar">
                <NavUnorderedList>
                    <div className="nav-menu">
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
            <NavIconLinkContainer>
                <NavMenuIconLink href="https://github.com/antondru" target="_blank" rel="noopener noreferrer" icon={<BsGithub />} title="GitHub"/>
                <NavMenuIconLink href="https://www.linkedin.com/in/anton-drugge-90304a83/" target="_blank" rel="noopener noreferrer" icon={<BsLinkedin />} title="LinkedIn"/>
            </NavIconLinkContainer>
        </Wrapper>
    );
}
