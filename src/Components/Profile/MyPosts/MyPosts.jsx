/* eslint-disable react/prop-types */
import React from 'react';
import './MyPosts.scss';
import { Post } from './Post/Post';

export const MyPosts = (props) => {
  const {
    posts, newPostText, updateNewPostText, sendPost,
  } = props;

  const onPostChange = (event) => {
    const text = event.target.value;
    updateNewPostText(text);
  };

  const onAddPost = () => {
    sendPost();
  };

  return (
    <div className="postList">
      <h3>My Posts</h3>
      <textarea
        className="postList__textarea textarea is-small"
        rows="2"
        onChange={onPostChange}
        value={newPostText}
      />
      <button
        className="postList__button button is-info"
        type="button"
        onClick={onAddPost}
      >
          Add post
      </button>
      {posts.map((post) => (
        <Post message={post.post} likesCount={post.likes} key={post.id} />
      ))}
    </div>
  );
};
