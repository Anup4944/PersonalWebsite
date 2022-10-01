import React, { useState } from "react";
import "./skills.css";
import Arrow from "../../img/arrow.png";

const Projects = () => {
  const [currSlide, setcurrSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "Front End",
      desc: "HTML5, CSS3, Sass, Tailwind CSS, Material UI,JavaScript (ES6+),TypeScript, React, Redux, React Hooks, Bootstrap, Styled Components and Responsive Web Design",
    },
    {
      id: "2",
      title: "Back End",
      desc: "Node JS, Express JS, Laravel and PHP",
    },
    {
      id: "3",
      title: "Cloud",
      desc: "Heroku, Netlify, Vercel, Mongo Atlas and AWS ( Lyamba Functions, Dynamo DB, API Gateway)",
    },
    {
      id: "4",
      title: "Database",
      desc: "MongoDb and MySql",
    },
  ];

  const handleOnClick = (way) => {
    way === "left"
      ? setcurrSlide(currSlide > 0 ? currSlide - 1 : 2)
      : setcurrSlide(currSlide < data.length - 1 ? currSlide + 1 : 0);
  };

  return (
    <div className="s" id="skills">
      <div
        className="slider"
        style={{ transform: `translateX(-${currSlide * 100}vw)` }}
      >
        {data.map((item) => {
          return (
            <div className="container" key={item.id}>
              <div className="item">
                <div className="leftContainer">
                  <h2 className="header">{item.title}</h2>
                  <p className="para">{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <img
        src={Arrow}
        className="arrow-left"
        alt=""
        onClick={() => handleOnClick("left")}
      />
      <img
        src={Arrow}
        className="arrow-right"
        alt=""
        onClick={() => handleOnClick()}
      />
    </div>
  );
};

export default Projects;
