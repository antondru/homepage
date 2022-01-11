import React, { useEffect, useRef } from "react";
import  PageSection from "../components/PageSection";
import { Contact } from "../components/Contact";
import { Projects } from "../components/Projects";
import { Info } from "../components/Info";
import { Navbar } from "../components/Navbar";

export const FrontPage = () => {

  useEffect(() => {
    const sections = document.querySelectorAll(".pageSection")
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        console.log(entry.isIntersecting)
        console.log(entry.intersectionRatio)
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
    <div id="sectionContainer">
      <PageSection title="HELLO" id="info">
        <Info />
      </PageSection>
      <PageSection title="PROJECTS" id="projects">
        <Projects />
      </PageSection>
      <PageSection title="CONTACT" id="contact">
        <Contact />
      </PageSection>
    </div> 
    <Navbar /> 
  </>
  );
}