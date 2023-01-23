import React from "react";
import "./product.css";

const Product = ({ img, link, title, desc, github }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-title">{title}</div>
      </div>
      <a className="link" href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
        <div className="imgOverLay">
          <h3 className="project-title">{title}</h3>
          <p className="project-desc">{desc}</p>
          <div className="options">
            <a
              href={github}
              className="iconsLinks"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i className="fa-brands fa-github" style={{ color: "#333" }}></i>
            </a>
            <a
              href={link}
              className="iconsLinks"
              target="_blank"
              rel="noreferrer"
            >
              <i
                className="fa-solid fa-rocket"
                style={{ color: "#d48b47" }}
              ></i>
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Product;
