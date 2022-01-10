import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { StyledLink, StyledText } from "../../pages/Pages.styles";
import IconLink from "../IconLink";

export const Info = () => {
  const scrollToElement = (targetElement: string) => {
    document.getElementById(targetElement)?.scrollIntoView({behavior: "smooth"});
  }
  
  return (
    <div className="infoContainer">
      <StyledText>
        Hi, I'm Anton! On this page, you can see some of my <StyledLink onClick={() => {scrollToElement("projects")}}>projects</StyledLink>.
        <br />
        If you want to, you can visit my <StyledLink href="https://github.com/antondru" target="_blank" rel="noopener noreferrer"> GitHub</StyledLink> or drop me a message on 
        <StyledLink href="https://www.linkedin.com/in/anton-drugge-90304a83/" target="_blank" rel="noopener noreferrer"> LinkedIn</StyledLink>!
        <br />
        <br />
        You can also <StyledLink onClick={() => {scrollToElement("contact")}}>contact</StyledLink> me by sending a message!
      </StyledText>
      <div className="iconContainer">
        <IconLink icon={<FiGithub />} href="https://github.com/antondru" target="_blank" rel="noopener noreferrer" desc="GitHub" />
        <IconLink icon={<FiLinkedin />} href="https://www.linkedin.com/in/anton-drugge-90304a83/" target="_blank" rel="noopener noreferrer" desc="LinkedIn" />
      </div>
    </div>
  );
};