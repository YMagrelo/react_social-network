/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessageCreator } from '../../redux/reducers/dialogsReducer';
import { Dialogs } from './Dialogs';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = (dispatch) => ({
  sendNewMessage: (addMessageToDialog) => {
    dispatch(sendMessageCreator(addMessageToDialog));
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);
