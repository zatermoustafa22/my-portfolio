import React from "react";
import "./Socials.css";
import './Home.css';
import { FaFacebook, FaInstagram, FaTelegram, FaGithub  } from "react-icons/fa";

export default function Socials() {
  return (
    <div id="socials" className="socials-container">
      <h1 className="h1-">My Socials</h1>
      <div className="social-links">
        <a href="https://www.instagram.com/musmusmusmusmusmusmus/" target="_blank" rel="noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.facebook.com/moustafa.zater.2025" target="_blank" rel="noreferrer">
          <FaFacebook className="icon" />
        </a>
        <a href="https://t.me/usernaaaaaaaaaaaaaame" target="_blank" rel="noreferrer">
          <FaTelegram className="icon" />
        </a>
        <a
          href="https://github.com/zatermoustafa22"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="icon" />
        </a>
      </div>
    </div>
  );
}
