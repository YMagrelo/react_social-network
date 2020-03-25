/* eslint-disable no-case-declarations */
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';

export const sendMessageCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextCreator = (value) => ({ type: UPDATE_NEW_MESSAGE, text: value });

const initialState = {
  messages: [
    { id: 1, message: 'Hello, how are you?' },
  ],
  dialogs: [
    { id: 1, name: 'Brad' },
    { id: 2, name: 'Curt' },
    { id: 3, name: 'Bob' },
    { id: 4, name: 'Josh' },
    { id: 5, name: 'Sharon' },
    { id: 6, name: 'Monica' },
  ],
  newMessageText: '',
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: 6,
        message: state.newMessageText,
      };

      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, newMessage],
      };

    case UPDATE_NEW_MESSAGE:

      return {
        ...state,
        newMessageText: action.text,
      };

    default:
      return state;
  }
};
