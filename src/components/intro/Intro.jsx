import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import "./intro.css";
import Me from "../../img/me-removebg-preview.png";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ["Frontend", "Backend", "FullStack"],
    });
  }, []);
  return (
    <div className="i" id="home">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h2 className="i-name"> Anup Poudel </h2>

          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">
                <span ref={textRef}></span> Developer
              </div>
            </div>

            <p className="i-desc">
              {" "}
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores.
            </p>
            <div className="i-icons">
              <a
                href="https://www.linkedin.com/in/anup-poudel/"
                target="_blank"
                rel="noreferrer"
                style={{ color: " #0A66C2" }}
              >
                <i className="fab fa-linkedin fa-5x"></i>
              </a>
              <a
                href="https://github.com/Anup4944"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#333" }}
              >
                <i className="fab fa-github fa-5x"></i>
              </a>
              <a
                href="https://twitter.com/apoudel_"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#1DA1F2" }}
              >
                <i className="fab fa-twitter fa-5x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img"></img>
      </div>
    </div>
  );
};

export default Intro;
