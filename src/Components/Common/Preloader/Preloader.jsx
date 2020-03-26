import React from 'react';
import './Preloader.scss';
import preLoader from '../../../assets/animations/Spinner-1s-203px.svg';

export const Preloader = () => (
  <img
    src={preLoader}
    alt="spiner"
    className="usersFething"
  />
);
