/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../UserInfo.scss';

export const ProfileStatusWithHooks = (props) => {
  const { status, updateStatusProfileThunk } = props;

  const [editMode, setEditMode] = useState(false);
  const [localStatus, setLocalStatus] = useState(status);

  const activateMode = () => {
    setEditMode(true);
  };

  const diactivateMode = () => {
    setEditMode(false);
    updateStatusProfileThunk(localStatus);
  };

  const onStatusChange = (e) => {
    const { value } = e.target;
    setLocalStatus(value);
  };


  return (
    <div className="profileStatus">
      {!editMode
        ? <span className="profileStatus__value" onClick={activateMode}>{status || 'status is not defined'}</span>
        : (
          <div>
            <input
              type="text"
              className="profileStatus__input"
              value={localStatus}
              onBlur={diactivateMode}
              autoFocus
              onChange={onStatusChange}
            />
          </div>
        )}

    </div>
  );
};
