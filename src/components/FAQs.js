import { React, useState } from "react";
import "../App.css";
import ar_right from "../Images/ar_right.svg";
import ar_down from "../Images/ar_down.svg";
import faq from "../Images/faq.svg";

const Ques = (props) => {
  const Sname = props.Sname;
  const QuesNo = props.QuesNo;
  const bodyText = props.bodyText;

  let [chImg, setChImg] = useState(ar_right);
  let [hdeTxt, setHdeTxt] = useState(
    "animate__animated animate__fadeOutUpBig d-none"
  );

  const toggleSlide = () => {
    setChImg(chImg === ar_right ? ar_down : ar_right);
    setHdeTxt(
      hdeTxt === "animate__animated animate__fadeOutUpBig d-none"
        ? "animate__animated animate__fadeIn"
        : "animate__animated animate__fadeOutUpBig d-none"
    );
  };
  return (
    <div className="Ques mb-2">
      <div className="row p-3">
        <img
          className="arrowChange ml-2 col-sm-1"
          src={chImg}
          onClick={toggleSlide}
          width="20px"
          height="30px"
          alt="arrow_right"
        />
        <div className="col-sm-1 QuesNumber">
          <p className="text-center">Q{QuesNo}</p>
        </div>
        <h5 className="col-sm-9">{Sname}?</h5>
      </div>

      <p className={hdeTxt}>
        <span className="Ans">Answer: </span>
        {bodyText}
      </p>
    </div>
  );
};

const FAQs = () => {
  return (
    <div className="mt-5 mb-5">
      <h3 className="row p-1">
        <span className="col-sm-8">Frequently Asked Questions?</span>
        <img src={faq} height="40px" width="40px" />
      </h3>
      <p>
        Below, we have put together some frequently asked questions, if you ever
        feel your Questions hasn't been answered or wasn't listed here, feel
        free to contact or write to us
      </p>
      <Ques
        Sname="What Simply Is CODA TEAM All About"
        QuesNo="1"
        bodyText="We are simply a team that's looking for members to join us and build together our company into greater heights by combining everyone's skills"
      />
      <Ques
        Sname="Is The Test That Hard"
        QuesNo="2"
        bodyText="No, it's just a simple test, the only way it can be hard is if you don't know the skills you choose well enough, and even if you don't know the test, you can click on 'i am a beginner', we'll gwt to you on that"
      />
      <Ques
        Sname="Is CODA TEAM The Company"
        QuesNo="3"
        bodyText="No, CODA TEAM is a subdivision of CODA Entreprise, a comany with diverse fields of expertise. CODA TEAM is an entry point for willing members to join our growing team"
      />
      <Ques
        Sname="Can I Work Remotely Or Physically"
        QuesNo="4"
        bodyText="Well, the two applies. Either it is remote or physical, we have every provisions for that. Infact, most conversations and projects are basically remote, so you can join from anywhere!"
      />

      <div className="flex-container rateVid m-2 row">
        <input placeholder="Write your feedback" className="form-control col" />
        <button className="ml-2 btn btn-danger">submit</button>
      </div>
    </div>
  );
};

export default FAQs;
