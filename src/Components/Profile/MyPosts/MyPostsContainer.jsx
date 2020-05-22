/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { sendPostActionCreator } from '../../../redux/reducers/profileReducer';
import { MyPosts } from './MyPosts';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  sendPost: (addPost) => dispatch(sendPostActionCreator(addPost)),
});


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
