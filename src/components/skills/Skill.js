import React from "react";
import "./Skill.scss";
const Skill = () => {
  return (
    <div className="skills" id="skills">
      <div className="title">
        <h1> My Skills </h1>
        <div className="underline"></div>
      </div>

      <div className="wrapper">
        <div className="front-end container">
          <h2 className="title-frontend">Front-End</h2>
          <div className="img-wrapper">
            <img src="assets/skills/html.png" alt="Html logo" />
            <img src="assets/skills/css.png" alt="CSS logo" />
            <img src="assets/skills/Javascript-logo.png" alt="JS logo" />
            <img src="assets/skills/react.png" alt="React logo" />
            <img src="assets/skills/redux.jpg" alt="React logo" />
          </div>
        </div>
        <div className="backend container">
          <h2 className="title-backend">Back-End</h2>
          <div className="img-wrapper">
            <img src="assets/skills/nodejs.png" alt="NodeJs logo" />
            <img src="assets/skills/mdb.png" alt="Mongo DB logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
