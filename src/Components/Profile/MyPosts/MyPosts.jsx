/* eslint-disable react/prop-types */
import React from 'react';
import './MyPosts.scss';
import { Post } from './Post/Post';

export const MyPosts = (props) => {
  const { posts } = props;
  const inputValue = React.createRef();
  const addPost = () => {
    alert(inputValue.current.value);
  };
  return (
    <div className="postList">
      <h3>My Posts</h3>
      <textarea className="postList__input" ref={inputValue} />
      <button
        className="postList__button button is-info"
        type="button"
        onClick={addPost}
      >
          Add post
      </button>
      {posts.map((post) => (
        <Post message={post.post} likesCount={post.likes} />
      ))}
    </div>
  );
};
