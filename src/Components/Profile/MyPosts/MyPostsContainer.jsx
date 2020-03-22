/* eslint-disable react/prop-types */
// import React from 'react';
import { connect } from 'react-redux';
import { updateNewPostTextCreator, sendPostCreator } from '../../../redux/profile_Reducer';
import { MyPosts } from './MyPosts';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  updateNewPostText: (text) => dispatch(updateNewPostTextCreator(text)),
  sendPost: () => dispatch(sendPostCreator()),
});


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
