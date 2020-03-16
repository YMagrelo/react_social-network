/* eslint-disable react/prop-types */
import React from 'react';
import './MyPosts.scss';
import { Post } from './Post/Post';

export const MyPosts = (props) => {
  const {
    store, posts, newPostText,
  } = props;

  const inputValue = React.createRef();

  const onPostChange = () => {
    const text = inputValue.current.value;
    store.updateNewPostText(text);
  };

  const addNewPost = () => {
    store.addPost();
  };

  return (
    <div className="postList">
      <h3>My Posts</h3>
      <textarea
        className="postList__input"
        ref={inputValue}
        onChange={onPostChange}
        value={newPostText}
      />
      <button
        className="postList__button button is-info"
        type="button"
        onClick={addNewPost}
      >
          Add post
      </button>
      {posts.map((post) => (
        <Post message={post.post} likesCount={post.likes} />
      ))}
    </div>
  );
};
