/* eslint-disable react/prop-types */
import React from 'react';
import './Profile.scss';
import { UserInfo } from './UserInfo/UserInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';

export const Profile = () => {

  return (
    <main className="content">
      <UserInfo />
      <MyPostsContainer />
    </main>
  );
};
