import React from "react";
import "./siteCards.css";
import { NavLink } from "react-router-dom";
import weCardLogo from "./We_logo.svg.png";

const SiteCards = () => {
  return (
    <>
      <div className="siteRequiredCards container">
        <div className="card" style={{ width: "18rem" }}>
          <NavLink
            to="https://wiki/SiteAssets/WIKI%20Main%20Page/Sales-ADSL%20BSS.html"
            target="_blank"
            className="card-text"
          >
            {" "}
            <img src={weCardLogo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h2>Sales Wiki</h2>
            </div>{" "}
          </NavLink>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <NavLink
            to="https://wiki/SiteAssets/WIKI%20Main%20Page/new_tech_page.html"
            target="_blank"
            className="card-text"
          >
            <img src={weCardLogo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h2>Technical Wiki</h2>
            </div>
          </NavLink>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <NavLink
            to="https://wiki/SiteAssets/WIKI%20Main%20Page/ftth-page-test.html"
            target="_blank"
            className="card-text"
          >
            <img src={weCardLogo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h2>FTTH Wiki</h2>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SiteCards;
