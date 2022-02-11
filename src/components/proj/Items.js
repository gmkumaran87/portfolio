import React from "react";
import "./Item.scss";

const Items = ({ item }) => {
  console.log(item);
  return (
    <article className="items-card">
      <img src={item.image} alt="item" className="project-img" />
      <div className="project-desc">
        <h3 className="project-title">{item.title}</h3>
        <ul>
          {item.tech.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
        <p>{item.desc}</p>
        <div className="project-actions">
          <button className="proj-btn">Github</button>
          <button className="proj-btn">Live Site</button>
        </div>
      </div>
    </article>
  );
};

export default Items;
