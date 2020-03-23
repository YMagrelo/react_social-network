import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
  <nav className="navigation">
    <ul className="navigation__list">
      <li className="navigation__item">
        <NavLink className="navigation__link" to="/profile">Profile</NavLink>
      </li>
      <li className="navigation__item">
        <NavLink className="navigation__link" to="/dialogs">Messages</NavLink>
      </li>
      <li className="navigation__item">
        <NavLink className="navigation__link" to="/news">News</NavLink>
      </li>
      <li className="navigation__item">
        <NavLink className="navigation__link" to="/music">Music</NavLink>
      </li>
      <li className="navigation__item">
        <NavLink className="navigation__link" to="/settings">Settings</NavLink>
      </li>
      <li className="navigation__item">
        <NavLink className="navigation__link" to="/users">Find Users</NavLink>
      </li>
    </ul>
  </nav>
);
