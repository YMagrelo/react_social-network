/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './Users.scss';
import cn from 'classnames';
import userLogo from '../../assets/images/user.png';

export const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  return (
    <div>
      <div className="pageNumber__list">
        {pages
          .map((page) => (
            <button
              className={cn('pageNumber__item', { 'pageNumber__item--is-active': props.currentPage === page })}
              onClick={() => props.onPageChanged(page)}
              type="button"
            >
              {page}
            </button>
          ))}
      </div>
      {props.users.map((user) => (
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
                  onClick={() => props.setUnFollowed(user.id)}
                >
               Unfollow
                </button>
              )
              : (
                <button
                  className="button is-info user__button"
                  type="button"
                  onClick={() => props.setFollowed(user.id)}
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
