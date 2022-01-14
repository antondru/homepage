import { useEffect } from "react";
import  PageSection from "../components/PageSection";
import { Contact } from "../components/Contact";
import { Projects } from "../components/Projects";
import { Info } from "../components/Info";
import { Navbar } from "../components/Navbar";

export const FrontPage = () => {

  useEffect(() => {
    const sections = document.querySelectorAll(".page-section")
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log(entry.target)
        entry.target.classList.toggle("show", entry.isIntersecting);
        handleNavBar(entry);
      })
    }, {
      threshold: 0.5, 
    })

    sections.forEach(section => {
      observer.observe(section);
    })
  },[])

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
    <PageSection title="info" id="info">
      <Info />
    </PageSection>
    <PageSection title="projects" id="projects">
      <Projects />
    </PageSection>
    <PageSection title="contact" id="contact">
      <Contact />
    </PageSection>
    <Navbar /> 
  </>
  );
}