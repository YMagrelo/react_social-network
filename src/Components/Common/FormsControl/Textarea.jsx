/* eslint-disable react/prop-types */
import React from 'react';
import './Textarea.scss';

export const Textarea = ({ input, meta, ...props }) => (
  <div className="textarea-warning">
    <textarea
      className="textarea"
      {...input}
      {...props}
    />
  </div>
);
