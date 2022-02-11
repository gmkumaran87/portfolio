import React, { useState } from "react";
import "./Projects.scss";
import projects from "../../data";
import Items from "./Items";

const Projects = () => {
  const categories = ["all", ...new Set(projects.map((el) => el.category))];
  const [state, setState] = useState(projects);

  const filterProjects = (category) => {
    console.log(category);

    if (category === "all") {
      setState(projects);
    } else {
      const selectedProjects = projects.filter((el) => {
        return el.category === category;
      });

      setState(selectedProjects);
    }
  };
  return (
    <div className="projects" id="projects">
      <div className="title">
        <h1> My Projects </h1>
        <div className="underline"></div>
      </div>
      <div className="categories">
        {categories.map((el, index) => {
          return (
            <button
              key={index}
              className="btn"
              onClick={(e) => filterProjects(el)}
            >
              {el}{" "}
            </button>
          );
        })}
      </div>
      <div className="project-items">
        {state.map((project) => (
          <Items item={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
