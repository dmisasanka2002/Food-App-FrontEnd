import React, { useState } from "react";
import "./NavLinks.css";
import { Link } from "react-router-dom";

function NavLinks({ reference }) {
  const [active, setActive] = useState("Home");

  function hideVerticalNavLinks() {
    if (reference.current.classList.length === 2) {
      reference.current.classList.toggle("block-navlinks");
      // console.log("hide");
    }
  }

  return (
    <ul className="nav-links" ref={reference}>
      <li
        className={active == "Home" ? "active" : ""}
        onClick={() => {
          setActive((active) => "Home");
          hideVerticalNavLinks();
        }}
      >
        <Link to="/">Home</Link>
      </li>
      <li
        className={active == "Products" ? "active" : ""}
        onClick={() => {
          setActive((active) => "Products");
          hideVerticalNavLinks();
        }}
      >
        <Link to="/products">Products</Link>
      </li>
      <li
        className={active == "About Us" ? "active" : ""}
        onClick={() => {
          setActive((active) => "About Us");
          hideVerticalNavLinks();
        }}
      >
        <Link to="/aboutus">About Us</Link>
      </li>
      <li
        className={active == "Contact Us" ? "active" : ""}
        onClick={() => {
          setActive((active) => "Contact Us");
          hideVerticalNavLinks();
        }}
      >
        <Link to="/contactus">Contact Us</Link>
      </li>
    </ul>
  );
}

export default NavLinks;
