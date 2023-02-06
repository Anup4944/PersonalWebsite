import React, { useRef, useState, useContext } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kr00hhn",
        "template_tjr5m0k",
        formRef.current,
        "user_okjNVIUiZZzdPlrzjSyZz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c" id="contacts">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Lets discuss about projects</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +61 401 459 890
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              anuppoudel60@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Queanbeyan, NSW , Australia
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleOnSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Your name"
              name="user_name"
              required
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              required
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Your email"
              name="user_email"
              required
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="message"
              name="message"
              required
            />
            <button>Submit</button>
            <p
              style={{ marginTop: "10px", backgroundColor: darkMode && "#333" }}
            >
              {done && "Thank you for your email, I'll get back to you ASAP."}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
