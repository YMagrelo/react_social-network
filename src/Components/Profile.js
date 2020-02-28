import React from 'react';

export const Profile = () => (
  <main className="content">
        <div className="content__heading">
        <img
          className="content__heading-img" 
          src="https://static.brusselsairlines.com/_img/destinationPage2/Ukraine/Kiev-city.jpg"
          alt="kyiv view" 
        />
        </div>
        <div className="content__user-info">
        <img
          className="content__user-avatar" 
          src="https://i.pinimg.com/736x/84/1a/4a/841a4a098d8bd48a70ba5f29a550ab67.jpg"
          alt="kyiv view" 
        />
        User info
        </div>
        <div className="content__post-list">My Posts
          <div className="content__post">Post 1</div>
          <div className="content__post">Post 2</div>
          <div className="content__post">Post 3</div>
        </div>
      </main>
)