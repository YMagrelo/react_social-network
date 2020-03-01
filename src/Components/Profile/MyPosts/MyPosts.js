import React from 'react';
import './MyPosts.scss';
import { Post } from '../Post/Post';

export const MyPosts = () => (
    <div className="content__post-list">My Posts
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