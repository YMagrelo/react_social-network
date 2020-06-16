/* eslint-disable react/prop-types */
import React from 'react';
import './Profile.scss';
import { UserInfo } from './UserInfo/UserInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';

export const Profile = (props) => {
  const {
    profile,
    isAuth,
    status,
    updateStatusProfileThunk,
    isOwner,
    savePhoto,
  } = props;

  return (
    <main className="content">
      <UserInfo
        profile={profile}
        isAuth={isAuth}
        status={status}
        updateStatusProfileThunk={updateStatusProfileThunk}
        isOwner={isOwner}
        savePhoto={savePhoto}
      />
      <MyPostsContainer />
    </main>
  );
};
