import { React, useState } from "react";
import "../App.css";
import ar_right from "../Images/ar_right.svg";
import ar_down from "../Images/ar_down.svg";

const Step = (props) => {
  const Sname = props.Sname;
  const stepNo = props.stepNo;
  const bodyText = props.bodyText;

  let [chImg, setChImg] = useState(ar_down);
  let [hdeTxt, setHdeTxt] = useState("animate__animated animate__fadeInDown");

  const toggleSlide = () => {
    setChImg(chImg === ar_right ? ar_down : ar_right);
    setHdeTxt(
      hdeTxt === "animate__animated animate__fadeOutUpBig d-none"
        ? "animate__animated animate__fadeIn"
        : "animate__animated animate__fadeOutUpBig d-none"
    );
  };
  return (
    <div className="Step mb-2">
      <div className="row p-3">
        <img
          className="arrowChange ml-2 col-sm-1"
          src={chImg}
          onClick={toggleSlide}
          width="20px"
          height="30px"
          alt="arrow_right_down"
        />
        <div className="col-sm-1 StepNumber">
          <p className="text-center">{stepNo}</p>
        </div>
        <h5 className="col-sm-9">{Sname}</h5>
      </div>

      <p className={hdeTxt}>{bodyText}</p>
    </div>
  );
};

const Ready = () => {
  return (
    <div className="mt-5">
      <h3 className="RHeader p-1">Ready to Join Us?</h3>
      <p>You're part of the team in just 4 easy step;</p>
      <Step
        Sname="Click on the Join now button"
        stepNo="1"
        bodyText="This is the starting point. Upon clicking, you'll be welcomed with a short form to make a little analysis of yourself. You'll be providing us with your name and your skillset!"
      />
      <Step
        Sname="Pass the test"
        stepNo="2"
        bodyText="Depending on your skillset, you'll be sent a link to a short validating test, upon completion, you'll get the status immediately!"
      />
      <Step
        Sname="Await our short interview"
        stepNo="3"
        bodyText="Once you've passed the test, await our short interview! No need to panic, we are not asking any hard questions, that's just our way of knowning you!"
      />
      <Step
        Sname="Welcome to the team"
        stepNo="4"
        bodyText="At the end of the interview, you'll be welcomed with a short book of our guildlines that are simple just as A-B-C. Along with many items, you might be lucky to start or join us on a project on your first day!"
      />
    </div>
  );
};

export default Ready;
