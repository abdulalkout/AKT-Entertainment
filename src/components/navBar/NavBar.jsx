import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://cdn2.abiresearch.com/static/company_logos/3471_Control4.webp"
        alt="Logo"
      />
      <div className={`pageLinks ${isMobileMenuOpen ? "active" : ""}`}>
        <a className="nav-links">home</a>
        <a className="nav-links">comics</a>
        <a className="nav-links">shop</a>
        <a className="nav-links">signIn</a>
      </div>
      <div className="mobileMenuIcon" onClick={toggleMobileMenu}>
        &#9776;
      </div>
    </div>
  );
}

export default NavBar;
