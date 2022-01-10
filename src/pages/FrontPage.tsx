import React, { useEffect } from "react";
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
        entry.target.classList.toggle("show", entry.isIntersecting)
      })
    }, {
      threshold: 0.5,
    })

    sections.forEach(section => {
      observer.observe(section)
    })
  },[])

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