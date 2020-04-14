/* eslint-disable react/prop-types */
// import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/reducers/dialogsReducer';
import { Dialogs } from './Dialogs';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';

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

export const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);
