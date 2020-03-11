/* eslint-disable react/prop-types */
import React from 'react';
import './Dialogs.scss';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';

export const Dialogs = ({ state }) => {
  const dialogsElement = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  const messagesElement = state.messages.map((m) => <Message message={m.message} />);
  const inputMessage = React.createRef();
  const addMessage = () => {
    alert(inputMessage.current.value);
  };
  return (
    <div className="dialogs">
      <div className="dialogs__list">
        {dialogsElement}
      </div>
      <div className="dialogs__messages">
        {messagesElement}
        <textarea
          className="dialogs__input"
          ref={inputMessage}
        />
        <button
          type="button"
          className="button is-info dialogs__button"
          onClick={addMessage}
        >
          Add message
        </button>
      </div>
    </div>
  );
};
