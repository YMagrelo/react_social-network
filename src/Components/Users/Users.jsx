/* eslint-disable react/prop-types */
import React from 'react';
import './Users.scss';
import { Pagination } from './Pagination';
import { User } from './User';

export const Users = (props) => {
  const {
    totalUsersCount,
    pageSize,
    users,
    onPageChanged,
    followingProgress,
    followSuccess,
    unfollowSuccess,
  } = props;

  return (
    <div>
      <Pagination
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
      />
      {users.map((user) => (
        <User
          user={user}
          followingProgress={followingProgress}
          followSuccess={followSuccess}
          unfollowSuccess={unfollowSuccess}
          key={user.id}
        />
      ))}
    </div>
  );
};
