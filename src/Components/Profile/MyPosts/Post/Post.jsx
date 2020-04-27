import React from 'react';
import './Post.scss';

export const Post = (props) => {
  const { message, likesCount } = props;

  return (
    <div className="post">
      <img
        src="https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2019/03/13/brad-pitt.jpg"
        className="post__avatar"
        alt="user icon"
      />
      {message}
      <div className="post__like">
        Like
        {likesCount}
      </div>
    </div>

  );
};
