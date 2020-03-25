/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './Users.scss';
import * as axios from 'axios';
import userLogo from '../../assets/images/user.png';

export class UsersClass extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users/', {
        headers: {
          'API-KEY': '932d6a5e-9f13-471f-b3bb-9a946f84b9b5',
        },
      })
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  }

  render() {
    return (
      <div>
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
