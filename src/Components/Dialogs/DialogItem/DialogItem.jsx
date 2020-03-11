/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';

export const DialogItem = ({ id, name }) => {
  const path = `/dialogs/${id}`;

  return (
    <div className="dialogs__dialog">
      <NavLink to={path} className="dialogs__link">{name}</NavLink>
    </div>
  );
};
