import React from 'react';
import './Navbar.css';

export default function Navbar() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><button onClick={() => handleScroll('Home')}>Home</button></li>
        <li><button onClick={() => handleScroll('about')}>About Me</button></li>
        <li><button onClick={() => handleScroll('projects')}>My Projects</button></li>
        <li><button onClick={() => handleScroll('contact')}>Contact</button></li>
      </ul>
      <button className="socials-btn" onClick={() => handleScroll('socials')}>
  Socials
</button>

    </nav>
  );
}
