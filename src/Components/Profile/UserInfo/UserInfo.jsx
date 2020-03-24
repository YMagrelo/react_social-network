import React from 'react';
import './UserInfo.scss';

export const UserInfo = () => (
  <div className="userInfo">
    <div className="userInfo__heading">
      <img
        className="userInfo__heading-img"
        src="https://static.brusselsairlines.com/_img/destinationPage2/Ukraine/Kiev-city.jpg"
        alt="kyiv view"
      />
    </div>
    <div className="userInfo__user-info">
      <img
        className="userInfo__user-avatar"
        src="https://i.pinimg.com/736x/84/1a/4a/841a4a098d8bd48a70ba5f29a550ab67.jpg"
        alt="kyiv view"
      />
    User info
    </div>
  </div>
);
