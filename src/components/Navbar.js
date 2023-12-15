import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/Navbar.css'

export default function Navbar(){
  return (
    <header>
      <nav className="Navbar">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/pages/projects">
          <p>Projects</p>
        </NavLink>
        <NavLink to="/pages/blog">
          <p>Blog</p>
        </NavLink>
        <NavLink to="/pages/about_me">
          <p>About Me</p>
        </NavLink>
        <NavLink to="/pages/contact">
          <p>Contact</p>
        </NavLink>
      </nav>
    </header>
  );
}
