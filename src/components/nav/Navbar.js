import React from "react";
import "./Navbar.scss";
import List from "./List";
import { Person } from "@mui/icons-material";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const menuOptions = ["home", "skills", "projects", "contacts"];

  return (
    <nav className={menuOpen ? "active" : undefined}>
      <div className="wrapper">
        <div className="nav-left">
          <h2> Muthukumaran </h2>{" "}
          <a
            className="resume"
            href="https://drive.google.com/file/d/1p9233jK6RQgBUD4cjOISGwurajDerHtf/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            My Resume{" "}
          </a>
          <div className="mobile">
            <Person />
            <span> +91 - 9176630282 </span>{" "}
          </div>{" "}
        </div>{" "}
        <ul className="nav-links">
          {" "}
          {menuOptions.map((el, index) => (
            <List
              key={index}
              option={el}
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
            />
          ))}{" "}
        </ul>{" "}
        <div className="toggle-bar" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1"> </span> <span className="line2"> </span>
          <span className="line3"> </span>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
};

export default Navbar;
