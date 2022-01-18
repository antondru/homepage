import { StyledLink, StyledText } from "../../pages/Pages.styles";
import IconLink from "./IconLink";
import { IconContainer, ImageContainer, Img, InfoContainer, MediaContainer, TextContainer } from "./Info.styles";
import placeholder from "../../images/Placeholder.png"
import { StyledLetter, SubHeader } from "../PageSection/PageSection.styles";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Info = () => {
  const scrollToElement = (targetElement: string) => {
    document.getElementById(targetElement)?.scrollIntoView({behavior: "smooth"});
  }
  
  return (
    <InfoContainer className="info-container">
      <TextContainer className="info-text-container">
        <SubHeader className="subheader"><StyledLetter>Welcome</StyledLetter></SubHeader>
        <StyledText>
          Hi, I'm Anton! On this page (which isn't entirely finished, by the way), you can see some of my <StyledLink onClick={() => {scrollToElement("projects")}}>projects</StyledLink>.
          <br />
          You can also visit my <StyledLink href="https://github.com/antondru" target="_blank" rel="noopener noreferrer"> GitHub</StyledLink> or drop me a message on 
          <StyledLink href="https://www.linkedin.com/in/anton-drugge-90304a83/" target="_blank" rel="noopener noreferrer"> LinkedIn</StyledLink>!
          <br />
          <br />
          If you'd like, you can <StyledLink onClick={() => {scrollToElement("contact")}}>contact</StyledLink> me by sending a message!
        </StyledText>
      </TextContainer>
      <MediaContainer className="media-container">
        <ImageContainer className="image-container"> 
          <Img src={placeholder} alt="profilepic" height='150px' width='150px' />
        </ImageContainer>
        <IconContainer className="icon-container">
          <IconLink icon={<BsGithub />} href="https://github.com/antondru" target="_blank" rel="noopener noreferrer" desc="GitHub" title="GitHub" />
          <IconLink icon={<BsLinkedin />} href="https://www.linkedin.com/in/anton-drugge-90304a83/" target="_blank" rel="noopener noreferrer" desc="LinkedIn" title="LinkedIn" />
        </IconContainer>
      </MediaContainer>
    </InfoContainer>
  );
};