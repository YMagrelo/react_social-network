/* eslint-disable no-case-declarations */
const ADD_MESSAGE = 'dialogs/ADD_MESSAGE';

export const sendMessageCreator = (addMessageToDialog) => ({
  type: ADD_MESSAGE, addMessageToDialog,
});

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
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const body = action.addMessageToDialog;

      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };

    default:
      return state;
  }
};
