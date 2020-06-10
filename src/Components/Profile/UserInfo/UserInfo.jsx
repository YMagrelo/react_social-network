/* eslint-disable react/prop-types */
import React from 'react';
import './UserInfo.scss';
import { Preloader } from '../../Common/Preloader/Preloader';
import userLogo from '../../../assets/images/user.png';
import { ProfileStatusWithHooks } from './ProfileStatus/ProfileStatusWithHooks';

export const UserInfo = (props) => {
  const { profile, status, updateStatusProfileThunk } = props;

  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className="userInfo">
      <div className="userInfo__heading" />
      <div className="userInfo__user-info">
        <img
          className="userInfo__user-avatar"
          src={profile.photos.large !== null ? profile.photos.large : userLogo}
          alt="user avatar"
        />
        <p>{profile.fullName}</p>
        <p>{profile.aboutMe}</p>

        <ProfileStatusWithHooks
          status={status}
          updateStatusProfileThunk={updateStatusProfileThunk}
        />

      </div>
    </div>
  );
};
