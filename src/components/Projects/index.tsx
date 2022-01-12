import React from "react";
import { StyledText } from "../../pages/Pages.styles";
import { SubHeader } from "../PageSection/PageSection.styles";
import { ProjectsContainer } from "./Projects.styles";

export const Projects = () => {
  return (
    <ProjectsContainer className="projectsContainer">
      <SubHeader>My Projects<span style={{ color: "#FD2155" }}>.</span></SubHeader>
      <StyledText>
        In time, I might add some stuff I've done here...
      </StyledText>
    </ProjectsContainer>
  );
};