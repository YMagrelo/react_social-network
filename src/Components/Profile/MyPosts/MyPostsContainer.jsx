/* eslint-disable react/prop-types */
import React from 'react';
import { updateNewPostTextCreator, sendPostCreator } from '../../../redux/profile_Reducer';
import { MyPosts } from './MyPosts';

export const MyPostsContainer = (props) => {
  const {
    store,
  } = props;

  const state = store.getState();

  const onPostChange = (text) => {
    const action = updateNewPostTextCreator(text);
    store.dispatch(action);
  };

  const addNewPost = () => {
    store.dispatch(sendPostCreator());
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      sendPost={addNewPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};
