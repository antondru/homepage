import { FiGithub, FiLinkedin } from "react-icons/fi";
import { StyledLink, StyledText } from "../../pages/Pages.styles";
import IconLink from "../IconLink";
import { IconContainer, ImageContainer, InfoContainer, MediaContainer, TextContainer } from "./Info.styles";

export const Info = () => {
  const scrollToElement = (targetElement: string) => {
    document.getElementById(targetElement)?.scrollIntoView({behavior: "smooth"});
  }
  
  return (
    <InfoContainer className="infoContainer">
      <TextContainer>
        <StyledText>
          Hi, I'm Anton! I'm a developer from Luleå, Sweden. On this page, you can see some of my <StyledLink onClick={() => {scrollToElement("projects")}}>projects</StyledLink>. Right now, it isn't much to see though ;)
          <br />
          If you want to, you can visit my <StyledLink href="https://github.com/antondru" target="_blank" rel="noopener noreferrer"> GitHub</StyledLink> or drop me a message on 
          <StyledLink href="https://www.linkedin.com/in/anton-drugge-90304a83/" target="_blank" rel="noopener noreferrer"> LinkedIn</StyledLink>!
          <br />
          <br />
          You can also <StyledLink onClick={() => {scrollToElement("contact")}}>contact</StyledLink> me by sending a message!
        </StyledText>
      </TextContainer>
      <MediaContainer className="mediaContainer">
        <ImageContainer className="imageContainer" />
        <IconContainer className="iconContainer">
          <IconLink icon={<FiGithub />} href="https://github.com/antondru" target="_blank" rel="noopener noreferrer" desc="GitHub" />
          <IconLink icon={<FiLinkedin />} href="https://www.linkedin.com/in/anton-drugge-90304a83/" target="_blank" rel="noopener noreferrer" desc="LinkedIn" />
        </IconContainer>
      </MediaContainer>
    </InfoContainer>
  );
};