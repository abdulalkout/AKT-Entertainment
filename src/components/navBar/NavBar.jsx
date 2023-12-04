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
        <a href="/">home</a>
        <a href="">movies</a>
        <a href="">signIn</a>
      </div>
      <div className="mobileMenuIcon" onClick={toggleMobileMenu}>
        &#9776;
      </div>
    </div>
  );
}

export default NavBar;
