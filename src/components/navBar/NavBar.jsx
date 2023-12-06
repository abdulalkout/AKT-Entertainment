import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SignInContext } from "../../contexts/userContext/SignInContext";

function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { signIn, setSignIn } = useContext(SignInContext);

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
        <Link to="/" className="nav-links">
          home
        </Link>
        <Link to="/allmovies" className="nav-links">
          movies
        </Link>
        <Link to="/Shopping" className="nav-links">
          shop
        </Link>
        <Link to="/signin" className="nav-links">
          {signIn ? "SignOut" : "SignIn"}
        </Link>
      </div>
      <div className="mobileMenuIcon" onClick={toggleMobileMenu}>
        &#9776;
      </div>
    </div>
  );
}

export default NavBar;
