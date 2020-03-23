/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { updateNewPostTextActionCreator, sendPostActionCreator } from '../../../redux/reducers/profileReducer';
import { MyPosts } from './MyPosts';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text)),
  sendPost: () => dispatch(sendPostActionCreator()),
});


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
