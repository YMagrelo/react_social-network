import React from 'react';
import './MyPosts.scss';
import { Post } from '../Post/Post';

export const MyPosts = () => (
    <div className="postList">
      <h3>My Posts</h3>
      <textarea className="postList__input"></textarea>
      <button className="postList__button">Add post</button>
        <Post 
          message="Hello, how are you"
          likesCount="8"
        />
        <Post 
          message="This is my first post"
          likesCount="4"
        />
    </div>
)