/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import './UserInfo.scss';
import { Preloader } from '../../Common/Preloader/Preloader';
import userLogo from '../../../assets/images/user.png';
import { ProfileStatusWithHooks } from './ProfileStatus/ProfileStatusWithHooks';

export const UserInfo = (props) => {
  const {
    profile,
    status,
    updateStatusProfileThunk,
    isOwner,
    savePhoto,
  } = props;

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

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
        {isOwner && (
        <div className="field">
          <div className="file is-small">
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                onChange={(e) => onMainPhotoSelected(e)}
              />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload" />
                </span>
                <span className="file-label">
                  Choose image…
                </span>
              </span>
            </label>
          </div>
        </div>
        )}

        <ProfileStatusWithHooks
          status={status}
          updateStatusProfileThunk={updateStatusProfileThunk}
        />

      </div>
    </div>
  );
};
