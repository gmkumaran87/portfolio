import React from "react";
import "./Navbar.scss";
import List from "./List";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const menuOptions = ["home", "skills", "projects", "contacts", "resume"];

  return (
    <nav className={menuOpen ? "active" : undefined}>
      <div className="wrapper">
        <div className="nav-left">
          <h2> Muthukumaran </h2>
        </div>
        <ul className="nav-links">
          {menuOptions.map((el, index) => (
            <List
              key={index}
              option={el}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
          ))}
        </ul>
        <div className="toggle-bar" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1"> </span> <span className="line2"> </span>
          <span className="line3"> </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
