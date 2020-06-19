/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './UserInfo.scss';
import { Preloader } from '../../Common/Preloader/Preloader';
import userLogo from '../../../assets/images/user.png';
import { ProfileStatusWithHooks } from './ProfileStatus/ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';

export const UserInfo = (props) => {
  const {
    profile,
    status,
    updateStatusProfileThunk,
    isOwner,
    savePhoto,
  } = props;

  const [editMode, setEditMode] = useState(false);

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
        {editMode
          ? <ProfileDataForm profile={profile} isOwner={isOwner} />
          : (
            <ProfileData
              profile={profile}
              isOwner={isOwner}
              goToEditMode={setEditMode}
            />
          )}
        <ProfileStatusWithHooks
          status={status}
          updateStatusProfileThunk={updateStatusProfileThunk}
        />

      </div>
    </div>
  );
};

const ProfileData = ({
  profile, isOwner, goToEditMode,
}) => (
  <div>
    {isOwner && (
    <button
      type="button"
      onClick={() => goToEditMode(true)}
      className="button is-small"
    >
      Edit
    </button>
    )}
    <p>{profile.fullName}</p>
    <div>
      <b>Looking for a job: </b>
      {profile.lookingForAJob ? 'Yes' : 'No'}
    </div>
    {profile.lookingForAJob && (
    <div>
      <b>My professionl skills: </b>
      {profile.lookingForAJobDescription}
    </div>
    )}
    <div>
      <b>About me: </b>
      {profile.aboutMe}
    </div>
    <div>
      <b>Contacts: </b>
      {' '}
      {Object.keys(profile.contacts)
        .map((key) => (
          <Contact
            key={key}
            contactTitle={key}
            contactValue={profile.contacts[key]}
          />
        ))}
    </div>
  </div>
);

const Contact = ({ contactTitle, contactValue }) => (
  <div className="userInfo__contacts">

    {contactTitle}
    :
    {' '}

    {contactValue}
  </div>
);
