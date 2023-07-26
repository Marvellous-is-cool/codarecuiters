import { React, useEffect, useState } from "react";
import "../App.css";
import facebook from "../Images/facebook.svg";
import instagram from "../Images/instagram.svg";
import phone from "../Images/phone.svg";
import twitter from "../Images/twitter.svg";
import whatsapp from "../Images/whatsapp.svg";
import gmail from "../Images/gmail.svg";

const Temp = (props) => {
  let link = props.link;
  let [animEff, setAnimEff] = useState("");
  link = "#";
  const socialImg = props.socialImg;
  useEffect(() => {
    if (window.scrollY >= 1800) {
      setAnimEff("animate__animated animate__zoomIn");
    }
  }, []);
  return (
    <div className="flex-container col-sm mr-1">
      <span className={animEff}>
        <a className="a" href={link}>
          <img src={socialImg} height="30px" width="30px" alt="Social_image" />
        </a>
      </span>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="m-5 row">
      <Temp socialImg={facebook} />
      <Temp socialImg={instagram} />
      <Temp socialImg={whatsapp} />
      <Temp socialImg={twitter} />
      <Temp socialImg={phone} />
      <Temp socialImg={gmail} />
    </div>
  );
};

export default Contact;
