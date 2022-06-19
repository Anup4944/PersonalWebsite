import React from "react";
import "./about.css";
import Award from "../../img/Capture1.PNG";
import Me from "../../img/IMG-1091.jpg";

const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">I am Anup Poudel</p>
        <p className="a-desc">
          Qualified and competent Bachelor of Information Technology graduate
          with advanced knowledge of writing codes in HTML5,CSS3,JavaScript,
          React, Node Js, Express JS and MongoDB
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">
              Certification on Full Stack Web Development
            </h4>
            <p className="a-award-desc">
              Hand on experience using JS, React, Node and Mongo DB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
