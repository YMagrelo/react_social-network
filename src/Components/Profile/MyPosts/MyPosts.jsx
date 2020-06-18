/* eslint-disable react/prop-types */
import React from 'react';
import './MyPosts.scss';
import { Field, reduxForm } from 'redux-form';
import { Post } from './Post/Post';
import { required, maxLengthCreator } from '../../../utilites/validators';
import { Textarea } from '../../Common/FormsControl/Textarea';

export const MyPosts = React.memo((props) => {
  const { posts, sendPost } = props;
  const addNewPost = (values) => {
    sendPost(values.addPost);
  };

  return (
    <div className="postList">
      <h3>My Posts</h3>
      <AddPostFormReducer onSubmit={addNewPost} />
      {[...posts].reverse().map((post) => (
        <Post message={post.post} likesCount={post.likes} key={post.id} />
      ))}
    </div>
  );
});

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  const {
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="addPost"
        component={Textarea}
        validate={[required, maxLength10]}
        placeholder="Post message"
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
