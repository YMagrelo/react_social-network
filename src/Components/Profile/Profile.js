import React from 'react';
import './Profile.scss';
import { MyPosts } from './MyPosts/MyPosts';
import { UserInfo } from './UserInfo/UserInfo';



export const Profile = () => (
  <main className="content">
      <UserInfo />
      <MyPosts />
      </main>
)