import { FiGithub, FiLinkedin } from "react-icons/fi";
import { StyledLink, StyledText } from "../../pages/Pages.styles";
import IconLink from "./IconLink";
import { IconContainer, ImageContainer, Img, InfoContainer, MediaContainer, TextContainer } from "./Info.styles";
import placeholder from "../../images/Placeholder.png"
import { StyledLetter, SubHeader } from "../PageSection/PageSection.styles";

export const Info = () => {
  const scrollToElement = (targetElement: string) => {
    document.getElementById(targetElement)?.scrollIntoView({behavior: "smooth"});
  }
  
  return (
    <InfoContainer className="info-container">
      <TextContainer>
        <SubHeader><StyledLetter>/</StyledLetter>Hello</SubHeader>
        <StyledText>
          Hi, I'm Anton! I'm a developer from Luleå, Sweden. On this page, you can see some of my <StyledLink onClick={() => {scrollToElement("projects")}}>projects</StyledLink>.
          <br />
          If you want to, you can visit my <StyledLink href="https://github.com/antondru" target="_blank" rel="noopener noreferrer"> GitHub</StyledLink> or drop me a message on 
          <StyledLink href="https://www.linkedin.com/in/anton-drugge-90304a83/" target="_blank" rel="noopener noreferrer"> LinkedIn</StyledLink>!
          <br />
          <br />
          You can also <StyledLink onClick={() => {scrollToElement("contact")}}>contact</StyledLink> me by sending a message!
        </StyledText>
      </TextContainer>
      <MediaContainer className="media-container">
        <ImageContainer className="image-container"> 
          <Img src={placeholder} alt="profilepic" height='150px' width='150px' />
        </ImageContainer>
        <IconContainer className="icon-container">
          <IconLink icon={<FiGithub />} href="https://github.com/antondru" target="_blank" rel="noopener noreferrer" desc="GitHub" title="GitHub" />
          <IconLink icon={<FiLinkedin />} href="https://www.linkedin.com/in/anton-drugge-90304a83/" target="_blank" rel="noopener noreferrer" desc="LinkedIn" title="LinkedIn" />
        </IconContainer>
      </MediaContainer>
    </InfoContainer>
  );
};