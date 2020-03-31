/* eslint-disable react/prop-types */
import React from 'react';
import './UserInfo.scss';
import { Preloader } from '../../Common/Preloader/Preloader';

export const UserInfo = (props) => {
  const { profile } = props;

  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className="userInfo">
      <div className="userInfo__heading">
        <img
          className="userInfo__heading-img"
          src="https://static.brusselsairlines.com/_img/destinationPage2/Ukraine/Kiev-city.jpg"
          alt="kyiv view"
        />
      </div>
      <div className="userInfo__user-info">
        <img
          className="userInfo__user-avatar"
          src={profile.photos.large}
          alt="user avatar"
        />
        {profile.fullName}
      </div>
    </div>
  );
};