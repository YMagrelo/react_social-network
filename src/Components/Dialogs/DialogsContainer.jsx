/* eslint-disable react/prop-types */
import React from 'react';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogs_Reducer';
import { Dialogs } from './Dialogs';

export const DialogsContainer = ({ store }) => {
  const state = store.getState();
  const onMessageChange = (text) => {
    store.dispatch(updateNewMessageTextCreator(text));
  };

  const addNewMessage = () => {
    store.dispatch(sendMessageCreator());
  };

  return (
    <Dialogs
      updateNewMessageText={onMessageChange}
      sendNewMessage={addNewMessage}
      dialogsPage={state.dialogsPage}
    />
  );
};
