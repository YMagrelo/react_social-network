/* eslint-disable no-underscore-dangle */
import { profileReducer } from './profile_Reducer';
import { dialogsReducer } from './dialogs_Reducer';
import { sidebarReducer } from './sidebar_Reducer';

// export const store = {
//   _state: {
//     profilePage: {
//       posts: [
//         { id: 1, post: 'Hello, how are you?', likes: 4 },
//         { id: 2, post: 'I don\'t have', likes: 2 },
//         { id: 3, post: 'I do', likes: 22 },
//       ],
//       newPostText: '',
//     },
//     dialogsPage: {
//       messages: [
//         { id: 1, message: 'Hello, how are you?' },
//         { id: 2, message: 'I don\'t have' },
//         { id: 3, message: 'I do' },
//       ],
//       dialogs: [
//         { id: 1, name: 'Brad' },
//         { id: 2, name: 'Curt' },
//         { id: 3, name: 'Bob' },
//         { id: 4, name: 'Josh' },
//         { id: 5, name: 'Sharon' },
//         { id: 6, name: 'Monica' },
//       ],
//       newMessageText: '',
//     },
//     sidebar: {},
//   },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

window.store = store;
