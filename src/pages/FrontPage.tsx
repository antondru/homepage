import { useEffect } from "react";
import  PageSection from "../components/PageSection";
import { Contact } from "../components/Contact";
import { Projects } from "../components/Projects";
import { Info } from "../components/Info";
import { Navbar } from "../components/Navbar";
import { SectionContainer } from "./Pages.styles";
import { FaBriefcase, FaUserAstronaut } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

export const FrontPage = () => {

  useEffect(() => {
    const sections = document.querySelectorAll(".page-section")
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);

        if (entry.intersectionRatio > 0.7) {
          handleNavBar(entry);
        }        
      });
    }, {
      threshold: 0.7, 
      rootMargin: '100px'
    });

    sections.forEach(section => {
      observer.observe(section);
    });
  },[]);

  function handleNavBar(entry: IntersectionObserverEntry) {
    const id = entry.target.id;
    const currentlyActive = document.querySelector('.navbar li.active');
    const shouldBeActive = document.querySelector('.navbar li[data-ref=' + id + ']');
  
    if (currentlyActive) {
      currentlyActive.classList.remove('active');
    }
    if (shouldBeActive) {
      shouldBeActive.classList.add('active');
    }
  }

  return (
    <>
    <SectionContainer className="section-container">
      <PageSection title="hello" id="info" firstSection={true} lastSection={false} scrollDownTo="projects" icon={<FaUserAstronaut />}>
        <Info />
      </PageSection>
      <PageSection title="projects" id="projects" firstSection={false} lastSection={false} scrollDownTo="contact" scrollUpTo="info" icon={<FaBriefcase />}>
        <Projects />
      </PageSection>
      <PageSection title="contact" id="contact" firstSection={false} lastSection={true} scrollUpTo="projects" icon={<FiMail />}>
        <Contact />
      </PageSection>
    </SectionContainer>
    <Navbar /> 
    </>
  );
}