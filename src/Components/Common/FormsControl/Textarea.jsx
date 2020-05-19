/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import './Textarea.scss';
import classNames from 'classnames';

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;

  return (
    <div className="formControl">
      <textarea
        className={classNames('textarea', { 'is-danger': hasError })}
        {...props}
        {...input}
        rows="2"
      />
      {hasError && (
      <span
        className="formControl__is-error"
      >
        {meta.error}
      </span>
      )}

    </div>
  );
};
