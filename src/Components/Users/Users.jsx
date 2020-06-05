/* eslint-disable react/prop-types */
import React from 'react';
import './Users.scss';
import { NavLink } from 'react-router-dom';
import userLogo from '../../assets/images/user.png';
import { Pagination } from './Pagination';

export const Users = (props) => {
  const {
    totalUsersCount, pageSize, users, onPageChanged,
  } = props;

  return (
    <div>
      <Pagination
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
      />
      {users.map((user) => (
        <div key={user.id} className="user">
          <div>
            <NavLink to={`/profile/${user.id}`}>
              <img
                src={user.photos.small !== null ? user.photos.small : userLogo}
                className="user__avatar"
                alt="user-avatar"
              />
            </NavLink>
            {user.followed
              ? (
                <button
                  className="button is-info user__button"
                  type="button"
                  disabled={props.followingProgress
                    .some((id) => id === user.id)}
                  onClick={() => {
                    props.unfollowSuccess(user.id);
                  }}
                >
                  Unfollow
                </button>
              )
              : (
                <button
                  className="button is-info user__button"
                  type="button"
                  disabled={props.followingProgress
                    .some((id) => id === user.id)}
                  onClick={() => {
                    props.followSuccess(user.id);
                  }}
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
