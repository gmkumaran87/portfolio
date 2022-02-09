import React, { useEffect, useRef } from "react";
import "./Intro.scss";
import { init } from "ityped";

const Intro = () => {
  const typeRef = useRef();

  useEffect(() => {
    init(typeRef.current, {
      showCursor: true,
      strings: ["Developer", "Designer"],
      typeSpeed: 100,
      backDelay: 600,
      backSpeed: 70,
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/banner-hero.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There I'm...!</h2>
          <h1>Muthukumaran</h1>
          <h3>
            Freelance <span ref={typeRef}></span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Intro;
