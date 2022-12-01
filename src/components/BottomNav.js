import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CgHome, CgGames, CgProfile } from 'react-icons/cg';
import { TiLocationArrow } from 'react-icons/ti';
import { ImSearch } from 'react-icons/im';
import './BottomNav.css';
import { themeContext } from '../Context/ThemeContext';

export default function BottomNav() {
  const theme = useContext(themeContext);

  return (
    <div className={theme.theme === 'light' ? 'bottom-nav' : 'bottom-nav-dark'}>
      <NavLink to="/" className="link nav-link">
        <CgHome className="icon" />
        Home
      </NavLink>
      <NavLink to="/search" className="link nav-link">
        <ImSearch className="icon" />
        Search
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
