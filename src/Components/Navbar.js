import React from 'react';

export const Navbar = () => (
  <nav className="navigation">
  <ul className="navigation__list">
    <li className="navigation__item">
      <a className="navigation__link">Profile</a>
    </li>
    <li className="navigation__item">
      <a className="navigation__link">Messages</a>
    </li>
    <li className="navigation__item">
      <a className="navigation__link">News</a>
    </li>
    <li className="navigation__item">
      <a className="navigation__link">Music</a>
    </li>
    <li className="navigation__item">
      <a className="navigation__link"></a>
    </li>
    <li className="navigation__item">
      <a className="navigation__link">Settings</a>
    </li>
  </ul>
</nav>
)