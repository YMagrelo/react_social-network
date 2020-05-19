/* eslint-disable react/prop-types */
import React from 'react';
import './Dialogs.scss';
import { Field, reduxForm } from 'redux-form';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';
import { Textarea } from '../Common/FormsControl/Textarea';
import { required, maxLengthCreator } from '../../utilites/validators';

export const Dialogs = ({
  dialogsPage, sendNewMessage,
}) => {
  const dialogsElement = dialogsPage.dialogs
    .map((d) => <DialogItem name={d.name} id={d.id} key={d.id} />);
  const messagesElement = dialogsPage.messages
    .map((m) => <Message message={m.message} key={m.id} />);

  const addNewMessage = (values) => {
    sendNewMessage(values.addMessageToDialog);
  };

  return (
    <div className="dialogs">
      <div className="dialogs__list">
        {dialogsElement}
      </div>
      <div className="dialogs__messages">
        {messagesElement}
        <AddMessageFormReducer onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const maxLength15 = maxLengthCreator(15);

const AddMessageForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        rows="2"
        name="addMessageToDialog"
        component={Textarea}
        validate={[required, maxLength15]}
      />
      <button
        className="button is-info dialogs__button"
        type="submit"
      >
        Add message
      </button>
    </form>
  );
};

const AddMessageFormReducer = reduxForm({ form: 'addMessageToDialog' })(AddMessageForm);
