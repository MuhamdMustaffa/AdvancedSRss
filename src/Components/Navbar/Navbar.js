import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import weLogo from "./We_logo.svg.png";
import { ThemeContext } from "../darkModeToggle/ThemeContext";
import "./Navbar.css";
import DarkModeToggle from "../darkModeToggle/darkModeToggle";

const Navbar = () => {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.color = darkMode ? "white" : "#808080";
  }, [darkMode]);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={weLogo} alt="" className="weLogoPage" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/SRs"
                >
                  SRs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Tools">
                  Tools
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Notes">
                  Notes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link disabled" to="/">
                  Soon
                </NavLink>
              </li>
            </ul>
            
          </div>
          <DarkModeToggle className="ms-auto" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
