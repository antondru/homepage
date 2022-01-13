import React from "react";
import { StyledText } from "../../pages/Pages.styles";
import { SubHeader } from "../PageSection/PageSection.styles";
import { ProjectCard } from "./ProjectComponent";
import { CardContainer, ProjectsContainer } from "./Projects.styles";



export const Projects = () => {
  const placeholder = 'https://picsum.photos/350/450?grayscale';
  
  return (
    <ProjectsContainer className="projects-container">
      <StyledText>
        In time, I might add some stuff I've done here... for now, just placeholders.
      </StyledText>
      <SubHeader>My Projects<span style={{ color: "#FD2155" }}>.</span></SubHeader>
      <CardContainer className="card-container">
        <ProjectCard backgroundImage={placeholder} title="Placeholder 1" text="This is just a placeholder" href="#"></ProjectCard>
        <ProjectCard backgroundImage={placeholder} title="Placeholder 2" text="This is just a placeholder" href="#"></ProjectCard>
        <ProjectCard backgroundImage={placeholder} title="Placeholder 3" text="This is just a placeholder" href="#"></ProjectCard>
        <ProjectCard backgroundImage={placeholder} title="Placeholder 4" text="This is just a placeholder" href="#"></ProjectCard>
        <ProjectCard backgroundImage={placeholder} title="Placeholder 5" text="This is just a placeholder" href="#"></ProjectCard>
        <ProjectCard backgroundImage={placeholder} title="Placeholder 6" text="This is just a placeholder" href="#"></ProjectCard>
        <ProjectCard backgroundImage={placeholder} title="Placeholder 7" text="This is just a placeholder" href="#"></ProjectCard>
        <ProjectCard backgroundImage={placeholder} title="Placeholder 8" text="This is just a placeholder" href="#"></ProjectCard>
      </CardContainer>
    </ProjectsContainer>
  );
};