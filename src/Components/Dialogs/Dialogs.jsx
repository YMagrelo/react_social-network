/* eslint-disable react/prop-types */
import React from 'react';
import './Dialogs.scss';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';

export const Dialogs = ({ dialogsPage, updateNewMessageText, sendNewMessage }) => {
  const dialogsElement = dialogsPage.dialogs
    .map((d) => <DialogItem name={d.name} id={d.id} key={d.id} />);
  const messagesElement = dialogsPage.messages
    .map((m) => <Message message={m.message} key={m.id} />);

  const handleMessageInput = (event) => {
    const text = event.target.value;
    updateNewMessageText(text);
  };

  const onSendMessageClick = () => {
    sendNewMessage();
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
          onChange={handleMessageInput}
          value={dialogsPage.newMessageText}
        />
        <button
          type="button"
          className="button is-info dialogs__button"
          onClick={onSendMessageClick}
        >
          Add message
        </button>
      </div>
    </div>
  );
};
