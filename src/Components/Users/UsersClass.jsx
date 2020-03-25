/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './Users.scss';
import * as axios from 'axios';
import cn from 'classnames';
import userLogo from '../../assets/images/user.png';

export class UsersClass extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`, {
        headers: {
          'API-KEY': '932d6a5e-9f13-471f-b3bb-9a946f84b9b5',
        },
      })
        .then((response) => {
          this.props.setUsers(response.data.items);
          this.props.setUsersTotalCount(response.data.totalCount);
        });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`, {
        headers: {
          'API-KEY': '932d6a5e-9f13-471f-b3bb-9a946f84b9b5',
        },
      })
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
  }

  render() {
    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
      pages.push(i);
    }

    return (
      <div>
        <div className="pageNumber__list">
          {pages
            .map((page) => (
              <span
                className={cn('pageNumber__item', { 'pageNumber__item--is-active': this.props.currentPage === page })}
                onClick={() => this.onPageChanged(page)}
              >
                {page}
              </span>
            ))}
        </div>
        {this.props.users.map((user) => (
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
                    onClick={() => this.props.setUnFollowed(user.id)}
                  >
                 Unfollow
                  </button>
                )
                : (
                  <button
                    className="button is-info user__button"
                    type="button"
                    onClick={() => this.props.setFollowed(user.id)}
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
  }
}
