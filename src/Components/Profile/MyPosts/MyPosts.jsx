/* eslint-disable react/prop-types */
import React from 'react';
import './MyPosts.scss';
import { Field, reduxForm } from 'redux-form';
import { Post } from './Post/Post';

export const MyPosts = (props) => {
  const { posts, sendPost } = props;

  const addNewPost = (values) => {
    sendPost(values.addPost);
  };

  return (
    <div className="postList">
      <h3>My Posts</h3>
      <AddPostFormReducer onSubmit={addNewPost} />
      {posts.map((post) => (
        <Post message={post.post} likesCount={post.likes} key={post.id} />
      ))}
    </div>
  );
};

const AddPostForm = (props) => {
  const {
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        className="postList__textarea textarea is-small"
        rows="2"
        name="addPost"
        component="textarea"
      />
      <button
        className="postList__button button is-info"
        type="submit"
      >
        Add post
      </button>
    </form>
  );
};

const AddPostFormReducer = reduxForm({ form: 'addPost' })(AddPostForm);
