/* eslint-disable react/prop-types */
// import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogs_Reducer';
import { Dialogs } from './Dialogs';


const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = (dispatch) => ({
  updateNewMessageText: (text) => {
    dispatch(updateNewMessageTextCreator(text));
  },
  sendNewMessage: () => {
    dispatch(sendMessageCreator());
  },
});

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
