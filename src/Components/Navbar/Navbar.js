import React from 'react';
import './Navbar.scss';

export const Navbar = () => (
  <nav className="navigation">
  <ul className="navigation__list">
    <li className="navigation__item">
      <a className="navigation__link navigation__link--active" href="#">Profile</a>
    </li>
    <li className="navigation__item">
      <a className="navigation__link" href="#">Messages</a>
    </li>
    <li className="navigation__item">
      <a className="navigation__link" href="#">News</a>
    </li>
    <li className="navigation__item">
      <a className="navigation__link" href="#">Music</a>
    </li>
    <li className="navigation__item">
      <a className="navigation__link" href="#"></a>
    </li>
    <li className="navigation__item">
      <a className="navigation__link" href="#">Settings</a>
    </li>
  </ul>
</nav>
)