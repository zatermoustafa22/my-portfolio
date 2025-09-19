import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Socials from './Socials';
export default function Home() {
  return (
    <>
    <Navbar/>
    <div id="Home" className="container">
      <img src="/profile-pic.jpg" alt="Zater Moustafa" className="profile-pic" />
      <h1 className='h1-'>I'm Zater Moustafa,<br></br><span className="highlight">Full stack Web Developer based in Algeria.</span></h1>
     
    </div>
    <About/>
    <Projects/>
    <Contact/>
    <Socials/>

    </>
  );
}
