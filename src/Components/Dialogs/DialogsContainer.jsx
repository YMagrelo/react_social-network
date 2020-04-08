/* eslint-disable react/prop-types */
// import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../redux/reducers/dialogsReducer';
import { Dialogs } from './Dialogs';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';


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

const AuthRedirectComponent = withAuthRedirect(Dialogs);

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
