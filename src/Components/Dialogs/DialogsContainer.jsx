/* eslint-disable react/prop-types */
// import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/reducers/dialogsReducer';
import { Dialogs } from './Dialogs';


const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
  isAuth: state.auth.isAuth,
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
