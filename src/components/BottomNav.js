import React from "react";
import { NavLink } from "react-router-dom";
import { CgHome, CgGames, CgProfile } from "react-icons/cg";
import { TiLocationArrow } from "react-icons/ti";
import "./BottomNav.css";

export default function BottomNav() {
  return (
    <div className="bottom-nav">
      <NavLink to="/" className="link nav-link">
        <CgHome className="icon" />
        Home
      </NavLink>
      <NavLink to="/characters" className="link nav-link">
        <CgGames className="icon" />
        Characters
      </NavLink>
      <NavLink to="/locations" className="link nav-link">
        <TiLocationArrow className="icon" />
        Locations
      </NavLink>
      <NavLink to="/about" className="link nav-link">
        <CgProfile className="icon" />
        About
      </NavLink>
    </div>
  );
}
