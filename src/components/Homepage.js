import React from "react";
import "./Homepage.css";
import { NavLink } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="home" id="home">
      <header>
        {/* <img src="/zeldainfo.svg" alt="zeldainfo" className="app-logo" /> */}
        {/* <h1 className="title">Zelda Info</h1> */}
      </header>
      <div className="menu-container">
        <div className="menu-box">
          <NavLink to="/characters" className="link app-link">
            Characters
          </NavLink>
        </div>
        <div className="menu-box">
          <NavLink to="/locations" className="link app-link">
            Locations
          </NavLink>
        </div>
        <div className="menu-box">
          <NavLink to="/about" className="link app-link">
            About ini
          </NavLink>
        </div>
      </div>
    </div>
  );
}
