/* eslint-disable react/prop-types */
import React from 'react';
import './Users.scss';
import cn from 'classnames';
import { useState } from 'react';

export const Pagination = (props) => {
  const {
    totalItemsCount,
    pageSize,
    onPageChanged,
    currentPage,
  } = props;

  const portionSize = 10;
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  const pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  return (

    <div className="pageNumber__list">
      {portionNumber > 1
        && (
        <button
          type="button"
          className="pageNumber__nav-button"
          onClick={() => setPortionNumber(portionNumber - 1)}
        >
          Prev
        </button>
        )}
      {pages
        .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
        .map((page) => (
          <button
            className={cn('pageNumber__item', { 'pageNumber__item--is-active': currentPage === page })}
            onClick={() => onPageChanged(page)}
            type="button"
          >
            {page}
          </button>
        ))}
      {portionCount > portionNumber
        && (
        <button
          type="button"
          className="pageNumber__nav-button"
          onClick={() => setPortionNumber(portionNumber + 1)}
        >
          Next
        </button>
        )}
    </div>

  );
};
