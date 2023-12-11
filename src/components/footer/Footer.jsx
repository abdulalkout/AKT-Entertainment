import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-div">
      <div className="footer-link">
        <Link to="/profile" className="footer-name">
          Who is Abdul ??
        </Link>
      </div>
    </div>
  );
}

export default Footer;
