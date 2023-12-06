import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SignInContext } from "../../contexts/userContext/SignInContext";

function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { signIn, cart } = useContext(SignInContext);
  const [onhover, setOnhover] = useState("on-hover-bar-none");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const displayCartItems = () => {
    setOnhover("on-hover-bar");
  };
  const hideCartItems = () => {
    setOnhover("on-hover-bar-none");
  };

  return (
    <div className="sticky-nav">
      <div className="navbar">
        <img
          className="logo"
          src="https://cdn2.abiresearch.com/static/company_logos/3471_Control4.webp"
          alt="Logo"
        />
        <div className={`pageLinks ${isMobileMenuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-links">
            Home
          </Link>
          <Link to="/allmovies" className="nav-links">
            Movies
          </Link>
          <Link to="/Shopping" className="nav-links">
            Shop
          </Link>
          <Link
            to="/signin"
            className="nav-links"
            onMouseEnter={displayCartItems}
          >
            {signIn ? "SignOut" : "SignIn"}
          </Link>
        </div>

        <div className="mobileMenuIcon" onClick={toggleMobileMenu}>
          &#9776;
        </div>
      </div>
      {signIn && (
        <div className={onhover} onMouseLeave={hideCartItems}>
          {cart.length ? (
            <div className="cart-list">
              {cart.map((item, index) => {
                return (
                  <div className="cart-item">
                    <img
                      className="cart-item-image"
                      src={item.thumbnailImage}
                    />
                    <p className="cart-item-price"> {item.basePrice}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>You have no items</div>
          )}
        </div>
      )}
    </div>
  );
}

export default NavBar;
