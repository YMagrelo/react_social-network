/* eslint-disable react/prop-types */
import React from 'react';
import './Users.scss';
import cn from 'classnames';

export const Pagination = (props) => {
  const { totalUsersCount, pageSize, onPageChanged, currentPage } = props;
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  return (

    <div className="pageNumber__list">
      {pages
        .map((page) => (
          <button
            className={cn('pageNumber__item', { 'pageNumber__item--is-active': currentPage === page })}
            onClick={() => onPageChanged(page)}
            type="button"
          >
            {page}
          </button>
        ))}
    </div>

  );
};
