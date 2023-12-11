import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const openFootersLinks = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="footer-div">
      <div className="footer-link">
        <Link to="/profile" className="footer-name">
          Who is Abdul ??
        </Link>
        <div className="footer-pics-div">
          <img
            onClick={() =>
              openFootersLinks(`https://www.linkedin.com/in/abdul-alkout/`)
            }
            className="footer-pics"
            src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3236130/linkedin-outline-icon-sm.png"
          />
          <img
            onClick={() => openFootersLinks(`https://github.com/abdulalkout`)}
            className="footer-pics"
            src="https://static-00.iconduck.com/assets.00/github-icon-2048x2048-91rgqivh.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
