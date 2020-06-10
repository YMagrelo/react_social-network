/* eslint-disable react/prop-types */
import React from 'react';
import './Users.scss';
import { Pagination } from './Pagination';
import { User } from './User';

export const Users = (props) => {
  const {
    totalItemsCount,
    pageSize,
    users,
    onPageChanged,
    followingProgress,
    followSuccess,
    unfollowSuccess,
    currentPage,
  } = props;

  return (
    <div>
      <Pagination
        totalItemsCount={totalItemsCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
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
