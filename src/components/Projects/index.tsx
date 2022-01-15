import React from "react";
import { StyledText } from "../../pages/Pages.styles";
import { StyledLetter, SubHeader } from "../PageSection/PageSection.styles";
import { ProjectCard } from "./ProjectComponent";
import { CardContainer, ProjectsContainer, TextContainer } from "./Projects.styles";



export const Projects = () => {
  const placeholder = 'https://picsum.photos/350/450?grayscale'; // Fetches a random grayscale picture from picsum
  
  return (
    <ProjectsContainer className="projects-container">
      <TextContainer>
        <StyledText>
          You can check out my projects below. For now, there are just placeholders.
        </StyledText>
      </TextContainer>
      <SubHeader><StyledLetter>/</StyledLetter>My Projects</SubHeader>
      <CardContainer className="card-container">
        <ProjectCard backgroundImage={placeholder} title="Placeholder 1" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." href="#"></ProjectCard>
        <ProjectCard backgroundImage={placeholder} title="Placeholder 2" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." href="#"></ProjectCard>
        <ProjectCard backgroundImage={placeholder} title="Placeholder 3" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." href="#"></ProjectCard>
        <ProjectCard backgroundImage={placeholder} title="Placeholder 4" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." href="#"></ProjectCard>
        <ProjectCard backgroundImage={placeholder} title="Placeholder 5" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." href="#"></ProjectCard>
        <ProjectCard backgroundImage={placeholder} title="Placeholder 6" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." href="#"></ProjectCard>
        <ProjectCard backgroundImage={placeholder} title="Placeholder 7" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." href="#"></ProjectCard>
        <ProjectCard backgroundImage={placeholder} title="Placeholder 8" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." href="#"></ProjectCard>
      </CardContainer>
    </ProjectsContainer>
  );
};