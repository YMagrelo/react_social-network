/* eslint-disable react/prop-types */
import React from 'react';
import './Users.scss';
import * as axios from 'axios';
import userLogo from '../../assets/images/user.png';

export const Users = (props) => {
  const {
    setFollowed, setUnFollowed, setUsers, users,
  } = props;

  const getUsers = () => {
    if (users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users/')
        .then((response) => {
          setUsers(response.data.items);
        });
    }
  };

  return (
    <div>
      <button
        className="button is-info"
        type="button"
        onClick={getUsers}
      >
               Get Users
      </button>
      {users.map((user) => (
        <div key={user.id} className="user">
          <div>
            <img
              src={user.photos.small !== null ? user.photos.small : userLogo}
              className="user__avatar"
              alt="user-avatar"
            />
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
              <span className="user__info-name">{user.name}</span>
              <span className="user__info-location">
                  user.location.city, user.location.country
              </span>
            </div>
            <div className="user__info-status">{user.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
