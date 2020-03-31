/* eslint-disable react/prop-types */
import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

export const Header = (props) => {
  const { authUserData } = props;

  return (
    <header className="header">
      <img
        className="header__logo"
        alt="header logo"
        src="https://cdn.dribbble.com/users/23569/screenshots/10858492/media/b9c6767518c11b567eac2b3a057ca51c.jpg"
      />
      <div className="header__auth auth">
        {authUserData.isAuth
          ? <div className="auth__isLogin">{authUserData.login}</div>
          : (
            <>
              <NavLink to="/login" className="auth__login">Login</NavLink>
              <NavLink to="/password" className="auth__password">Password</NavLink>
            </>
          )}

      </div>

    </header>
  );
};
