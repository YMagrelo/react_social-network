/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import * as axios from 'axios';
import './Users.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
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
                  disabled={props.followingProgress.some((id) => id !== user.id)}
                  className="button is-info user__button"
                  type="button"
                  onClick={() => {
                    props.toggleFollowingProgress(true, user.id);
                    axios
                      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                        withCredentials: true,
                        headers: {
                          'API-KEY': '932d6a5e-9f13-471f-b3bb-9a946f84b9b5',
                        },
                      })
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.setUnFollowed(user.id);
                        }
                        props.toggleFollowingProgress(false, user.id);
                      });
                  }}
                >
               Unfollow
                </button>
              )
              : (
                <button
                  disabled={props.followingProgress.some((id) => id !== user.id)}
                  className="button is-info user__button"
                  type="button"
                  onClick={() => {
                    props.toggleFollowingProgress(true, user.id);
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                      withCredentials: true,
                      headers: {
                        'API-KEY': '932d6a5e-9f13-471f-b3bb-9a946f84b9b5',
                      },
                    })
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.setFollowed(user.id);
                        }
                        props.toggleFollowingProgress(false, user.id);
                      });
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
