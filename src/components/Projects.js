import React from "react";
import project1 from "../assets/project1.png";
import project11 from "../assets/project11.png";
import project2 from "../assets/project2.png";
import project22 from "../assets/project22.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project66 from "../assets/project66.png";
import '../App.css'

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <img src={project1} alt="Project 1" />
          <h3>E-Commerce Store</h3>
          <p>React & Bootstrap-based online store with cart functionality.</p>
        </div>
        <div className="project-card">
          <img src={project11} alt="Project 2" />
          <h3>E-Commerce Store</h3>
          <p>React & Bootstrap-based online store with cart functionality.</p>
        </div>
        <div className="project-card">
          <img src={project2} alt="Project 2" />
         <h3>Portfolio Website</h3>
          <p>A fully responsive portfolio made with HTML,CSS & JavaScript.</p>
        </div>
        <div className="project-card">
          <img src={project22} alt="Project 2" />
          <h3>Portfolio Website</h3>
          <p>A fully responsive portfolio made with HTML,CSS & JavaScript.</p>
        </div>
        <div className="project-card">
          <img src={project3} alt="Project 3" />
          <h3>Portfolio Website</h3>
          <p>A fully responsive portfolio made with HTML,CSS,JavaScript& React.js.</p>
        </div>
        <div className="project-card">
          <img src={project4} alt="Project 4" />
          <h3>Portfolio Website</h3>
          <p>A fully responsive portfolio made with HTML,CSS,JavaScript& React.js.</p>
        </div>
        <div className="project-card">
          <img src={project5} alt="Project 5" />
          <h3>Portfolio Website</h3>
          <p>A fully responsive portfolio made with HTML,CSS,JavaScript& React.js.</p>
        </div>
        <div className="project-card">
          <img src={project6} alt="Project 6" />
          <h3>Portfolio Website</h3>
          <p>A fully responsive portfolio made with HTML,CSS,JavaScript& React.js.</p>
        </div>
        <div className="project-card">
          <img src={project66} alt="Project 6" />
          <h3>Portfolio Website</h3>
          <p>A fully responsive portfolio made with HTML,CSS,JavaScript& React.js.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
