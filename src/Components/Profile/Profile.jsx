/* eslint-disable react/prop-types */
import React from 'react';
import './Profile.scss';
import { MyPosts } from './MyPosts/MyPosts';
import { UserInfo } from './UserInfo/UserInfo';

export const Profile = (props) => {
  const {
    profilePage,
    addPost,
    updateNewPostText,
  } = props;

  return (
    <main className="content">
      <UserInfo />
      <MyPosts
        posts={profilePage.posts}
        newPostText={profilePage.newPostText}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </main>
  );
};
