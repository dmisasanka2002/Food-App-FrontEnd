import React, { useContext, useRef, useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets/frontend_assets/assets";
import NavLinks from "../NavLinks/NavLinks";
import { Link, useNavigate } from "react-router-dom";
import { BiCart, BiMoon, BiSearch, BiSun } from "react-icons/bi";
import { StoreContext } from "../Contexts/StoreContext";
import { ThemeContext } from "../Contexts/ThemeContext";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { AuthContext } from "../Contexts/AuthContext";

function NavBar({ setIsDisplaySignIn }) {
  const { getTotalItemCart } = useContext(StoreContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const { isLogged } = useContext(AuthContext);
  const navigate = useNavigate();
  const navLinkRef = useRef(null);

  // mobile screen nav bar
  function handleMenu() {
    navLinkRef.current.classList.toggle("block-navlinks");
  }

  return (
    <div className="content-fixed">
      <div className="nav">
        <div className="logo">
          <RxHamburgerMenu
            className="menu-icon"
            onClick={() => {
              handleMenu();
            }}
          />
          <img src={assets.logo} alt="" />
        </div>
        <NavLinks reference={navLinkRef} />
        <div className="right">
          <div className="search">
            <input type="search" name="" id="" />
            <BiSearch />
          </div>
          <div className="cart">
            <Link to="/cart">
              <BiCart />
              <span>{getTotalItemCart()}</span>
            </Link>
          </div>
          <div
            className="signup"
            onClick={() => {
              isLogged ? navigate("/profile") : setIsDisplaySignIn(true);
            }}
          >
            <CgProfile />
          </div>

          <div className="theme-icon">
            <BiSun
              className={theme == "dark" ? "show-icon" : "hide-icon"}
              onClick={(e) => {
                setTheme("light");
                // e.target.style.display = "none";
              }}
            />
            <BiMoon
              className={theme == "light" ? "show-icon" : "hide-icon"}
              onClick={(e) => {
                setTheme("dark");
                // e.target.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
