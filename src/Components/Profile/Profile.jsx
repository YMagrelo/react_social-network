/* eslint-disable react/prop-types */
import React from 'react';
import './Profile.scss';
import { MyPosts } from './MyPosts/MyPosts';
import { UserInfo } from './UserInfo/UserInfo';

export const Profile = ({ state }) => (
  <main className="content">
    <UserInfo />
    <MyPosts posts={state.posts} />
  </main>
);
