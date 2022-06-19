import React from "react";
import "./menu.css";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <div className="menu">
        <ul>
          <li onClick={() => setMenuOpen(!menuOpen)}>
            <a href="#home" className="home">
              Home
            </a>
          </li>
          <li onClick={() => setMenuOpen(!menuOpen)}>
            <a href="#about" className="about">
              About
            </a>
          </li>
          <li onClick={() => setMenuOpen(!menuOpen)}>
            <a href="#skills" className="skills">
              Skills
            </a>
          </li>
          <li onClick={() => setMenuOpen(!menuOpen)}>
            <a href="#projects" className="projects">
              Projects
            </a>
          </li>
          <li onClick={() => setMenuOpen(!menuOpen)}>
            <a href="#contacts" className="contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="menu-bg" id="menu-bg"></div>
    </>
  );
};

export default Menu;
