/* eslint-disable react/prop-types */
import React from 'react';
import './Dialogs.scss';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';

export const Dialogs = ({ dialogsPage, addNewMessage, updateNewMessageText }) => {
  const dialogsElement = dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
  const messagesElement = dialogsPage.messages.map((m) => <Message message={m.message} />);
  const inputMessage = React.createRef();

  const handleMessageInput = () => {
    const text = inputMessage.current.value;
    updateNewMessageText(text);
  };

  const addMessage = () => {
    addNewMessage();
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
          onChange={handleMessageInput}
          value={dialogsPage.newMessageText}
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
