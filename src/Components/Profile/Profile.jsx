/* eslint-disable react/prop-types */
import React from 'react';
import './Profile.scss';
import { UserInfo } from './UserInfo/UserInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';

export const Profile = (props) => {
  const { profile } = props;

  return (
    <main className="content">
      <UserInfo profile={profile} />
      <MyPostsContainer />
    </main>
  );
};