import React from "react";
import "./Footer.scss";
import { EmailOutlined, Twitter, LinkedIn } from "@mui/icons-material/";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="wrapper">
        <h2>You can find me on</h2>
        <div className="footer-icons">
          <Twitter className="icon" />
          <EmailOutlined className="icon" />
          <LinkedIn className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
