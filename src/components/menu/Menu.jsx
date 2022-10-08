import React from "react";
import "./menu.css";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <div className="menu">
        <ul>
          <li>
            <a
              href="#home"
              className="home"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="about"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="skills"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="projects"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              className="contact"
              onClick={() => setMenuOpen(!menuOpen)}
            >
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
