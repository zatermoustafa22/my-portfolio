import React from 'react';
import './Home.css';
import './Skillbars.css';
import profilePic from './assets/profile-pic-long.jpg';


export default function About() {
  const skills = [
    { name: "React js", level: 75 },
    { name: "Node js", level: 85 },
    { name: "PHP", level: 85 },
    { name: "Python", level: 40 },
    { name: "HTML & CSS", level: 75 },
  ];

  return (
    <div id="about" className="about-container">
      {/* Left Side Image */}
      <div className="about-image">
        <img src={profilePic} alt="About Me" />
      </div>
    



      {/* Right Side Content */}
      <div className="about-content">
        <h1 className='h1-'>About Me</h1>
        <h3 className='about-me'>
         I hold a degree in Computer Science with a specialization in Software Engineering and Web Development. As a Fullstack Developer, I work with modern technologies including React.js, Node.js, PHP, Python, HTML, and CSS to create efficient, scalable, and visually engaging web applications.
        </h3>

        <div className="skills right-side">
          {skills.map((skill, index) => (
            <div key={index} className="skill-container">
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar-background">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}
