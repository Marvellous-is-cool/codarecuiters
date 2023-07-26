import { React, useState, useEffect } from "react";
import "../App.css";
import handshake from "../Images/handshake.svg";
import blush from "../Images/blush.svg";
import code from "../Images/code.svg";

const Ads = (props) => {
  const [title, img, body, anim, animateImg] = [
    props.title,
    props.img,
    props.body,
    props.anim,
    props.animateImg,
  ];
  return (
    <div className={anim}>
      <div className="flex-container m-4">
        <div className="adDivBoard jumbotron row">
          <div className="col-sm-6">
            <h1 className="lead w-25 animate__animated animate__flash animate__repeat-2 animate__slower">
              {title}
            </h1>
          </div>
          <div className="col-sm-6">
            <h1 className="emoj_wink lead">
              <img
                className={animateImg}
                src={img}
                width="100px"
                height="100px"
                alt="animate_image"
              />
            </h1>
          </div>
          <p className="m-3">{body}</p>
        </div>
      </div>
    </div>
  );
};

const SlideIndic = (props) => {
  let [bg1, bg2, bg3] = [props.bg1, props.bg2, props.bg3];
  return (
    <div>
      <div className="flex-container">
        <div className="SI ml-2" style={{ background: bg1 }}></div>
        <div className="SI ml-2" style={{ background: bg2 }}></div>
        <div className="SI ml-2" style={{ background: bg3 }}></div>
      </div>
    </div>
  );
};

const Timer = () => {
  let [timer, setTimer] = useState(30);

  useEffect(() => {
    const timerCounter = setInterval(() => {
      if (timer === 30) {
        clearInterval(timerCounter);
        const timerCounter2 = setInterval(() => {
          if (timer === 0) {
            clearInterval(timerCounter2);
            const timerCounter3 = setInterval(() => {
              if (timer === 30) {
                clearInterval(timerCounter3);
              }
              setTimer(timer++);
            }, 500);

            return () => clearInterval(timerCounter3);
          }
          setTimer(timer--);
        }, 500);
      }
    }, 500);
  }, [timer]);

  if (timer <= 15) {
    return (
      <div className="animate__animated animate__fadeInRightBig">
        <Ads
          title="Welcome to the company"
          img={handshake}
          body="Where we collaborate to make the best of ourselves, thus taking the company into a higher place!"
          anim="animate__animated animate__headShake"
          animateImg="animate__animated animate__flipInX"
        />
        <SlideIndic bg3="#a52a2ab6" />
      </div>
    );
  } else if (timer <= 25) {
    return (
      <div className="animate__animated animate__fadeInRightBig">
        <Ads
          title="Skills related to coding?"
          img={code}
          body="No? Don't worry a bit, you can add yours too, and get along with us.. Yes? You're exactly who we need!"
          anim="animate__animated animate__pulse"
          animateImg="animate__animated animate__zoomIn"
        />
        <SlideIndic bg2="#a52a2ab6" />
      </div>
    );
  } else {
    return (
      <div className="animate__animated animate__fadeInRightBig">
        <Ads
          title="Hey! You're ON!!"
          img={blush}
          body="Not just you, but with your talents, you're a rockstar, no need to
                    force the potential to shine, we already sees it in you!"
          anim="animate__animated animate__jello"
          animateImg="animate__animated animate__flip"
        />
        <SlideIndic bg1="#a52a2ab6" />
      </div>
    );
  }
};

const AdBoard = () => {
  return <Timer />;
};

export default AdBoard;
