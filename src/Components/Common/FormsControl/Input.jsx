/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import './Textarea.scss';
import classNames from 'classnames';
import { Field } from 'redux-form';

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;

  return (
    <div className="formControl">
      <textarea
        className={classNames('input', { 'is-danger': hasError })}
        {...props}
        {...input}
        rows="2"
      />
      {hasError && (
      <span className="formControl__is-error">
        {meta.error}
      </span>
      )}

    </div>
  );
};

export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      validate={validators}
      component={component}
      {...props}
    />
    {text}
  </div>
);
