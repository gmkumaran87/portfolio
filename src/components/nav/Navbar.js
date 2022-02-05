import React from "react";
import "./Navbar.scss";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className={menuOpen && "active"}>
      <div className="wrapper">
        <div className="nav-left">
          <IntegrationInstructionsOutlinedIcon className="icons" />
        </div>
        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <a href="#intro">Home</a>
            </li>
            <li>
              <a href="#skills">Slills</a>
            </li>
            <li>
              <a href="#project">projects</a>
            </li>
            <li>
              <a href="#contacts">contact</a>
            </li>
          </ul>
          <div className="toggle-bar" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
