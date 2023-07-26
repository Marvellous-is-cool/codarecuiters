import { React, useEffect } from "react";
import "./App.css";
import AdBoard from "./components/AdBoard";
import Obj from "./components/Objectives";
import Ready from "./components/ReadySteps";
import Contact from "./components/contactUs";
import FAQs from "./components/FAQs";

const WebNavs = () => {
  const more = () => {
    window.scrollTo({ top: 1900, behavior: "smooth" });
  };
  return (
    <div className="container-fluid col-sm-6 navbar navbar-default">
      <p className="tagStyle animate__animated animate__rubberBand animate__repeat-1 animate__slower">
        recuihub!
        <br />
        <small className="tagslogan text-muted small">you're next!</small>
      </p>
      <button className="btn btn-danger animate__animated animate__pulse animate__repeat-3">
        Join now
      </button>
      <button className="btn btn-rbg" onClick={more}>
        Contact us
      </button>
    </div>
  );
};

const ActionBtns = () => {
  const more = () => {
    window.scrollTo({ top: 1500, behavior: "smooth" });
  };
  return (
    <div className="m-5">
      <div className="row">
        <button className="col-sm-3 btn btn-rbg mr-2" onClick={more}>
          Learn more
        </button>
        <button className="btn col-sm-8 btn-danger animate__animated animate__pulse animate__repeat-3">
          Join now
        </button>
      </div>
    </div>
  );
};

const VideoExplan = () => {
  return (
    <div className="mt-5">
      <h4>
        Need an explanation? We have created a short video online just for you.
        Listen below and let us know what you think!
        <video className="Respvideo mt-2 col" controls>
          <source src=""></source>
        </video>
        <div className="flex-container rateVid mt-2 row">
          <input
            placeholder="Write your feedback"
            className="form-control col"
          />
          <button className="ml-2 btn btn-danger">submit</button>
        </div>
      </h4>
    </div>
  );
};

const Footer = () => {
  const more = () => {
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  return (
    <div className="container-fluid col-sm-12 navbar footer navbar-default">
      <p className="copyright">&copy; Copyright 2023. All Rights Reserved</p>

      <p className="tagStyle animate__animated animate__rubberBand animate__repeat-1 animate__slower">
        recuihub!
        <br />
        <small className="tagslogan text-muted small">you're next!</small>
      </p>
      <button className="btn btn-danger animate__animated animate__pulse animate__repeat-3">
        Join now
      </button>
      <button className="btn btn-rbg" onClick={more}>
        Contact us
      </button>
    </div>
  );
};

const App = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="header pageHeader row animate__animated animate__fadeIn">
          <div className="col-sm-6">
            <h3 className="h5 mt-3">
              <b className="name1">Co</b>
              <b className="name2">Da</b> Team
            </h3>
          </div>
          <WebNavs />
        </div>
        <AdBoard />
        <hr className="m-5" />
        <VideoExplan />
        <Obj />
        <ActionBtns />
        <hr className="m-5" />
        <Ready />
        <hr className="m-5" />
        <Contact />
        <hr className="m-5" />
        <FAQs />
        <hr className="m-5" />
      </div>
      <Footer />
    </>
  );
};

export default App;
