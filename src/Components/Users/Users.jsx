/* eslint-disable react/prop-types */
import React from 'react';
import './Users.scss';

export const Users = (props) => {
  const { users, setFollowed, setUnFollowed } = props;

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="user">
          <div>
            <img src={user.photoUrl} className="user__avatar" alt="user-avatar" />
            {user.followed
              ? (
                <button
                  className="button is-info user__button"
                  type="button"
                  onClick={() => setUnFollowed(user.id)}
                >
             Unfollow
                </button>
              )
              : (
                <button
                  className="button is-info user__button"
                  type="button"
                  onClick={() => setFollowed(user.id)}
                >
             Follow
                </button>
              )}
          </div>
          <div className="user__container">
            <div className="user__info">
              <span className="user__info-name">{user.fullName}</span>
              <span className="user__info-location">
                {`${user.location.city}, ${user.location.country}`}
              </span>
            </div>
            <div className="user__info-status">{user.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
