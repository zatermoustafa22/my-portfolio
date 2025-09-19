import React from 'react';
import './Projects.css';
import './Home.css';

import nterface from './assets/interface.jpg';
import berburry from './assets/berburry.jpg';

export default function Projects() {
  const projects = [
    { 
      name: "Agences Immobilières", 
      img: nterface, 
      demo: "https://fakezaterberburry.netlify.app",  
      repo: "https://github.com/zatermoustafa22/agence-immobiliere" 
    },
    { 
      name: "Exemple Boutique Burberry", 
      img: berburry, 
      demo: "https://fakezaterberburry.netlify.app", 
      repo: "https://github.com/zatermoustafa22/fakeburbberywebsite" 
    },
    { 
      name: "Boutique d'accessoires", 
      img: nterface,
      demo: "https://fakezaterberburry.netlify.app", 
      repo: "https://github.com/zatermoustafa22/fakeburbberywebsite" 
    },
  ];

  return (
    <div id="projects" className="projects-container">
      <h1>Latest Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.name} />

            <div className="project-info">
              <h3 className="project-title">{project.name}</h3>

              <div className="project-links">
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Live Demo
                  </a>
                )}
                {project.repo && (
                  <a 
                    href={project.repo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
