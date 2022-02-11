import React from "react";
import "./Footer.scss";
import { Twitter, LinkedIn, GitHub } from "@mui/icons-material/";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="wrapper">
        <h2>You can find me on</h2>
        <div className="footer-icons">
          <a
            href="https://twitter.com/gmkumaran87"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter className="icon" />
          </a>
          <a
            href="https://github.com/gmkumaran87"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/gmkumaran"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
