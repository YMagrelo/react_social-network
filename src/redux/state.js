/* eslint-disable no-underscore-dangle */
export const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: 'Hello, how are you?', likes: 4 },
        { id: 2, post: 'I don\'t have', likes: 2 },
        { id: 3, post: 'I do', likes: 22 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      messages: [
        { id: 1, message: 'Hello, how are you?' },
        { id: 2, message: 'I don\'t have' },
        { id: 3, message: 'I do' },
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
    },
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  addNewMessage() {
    const newMessage = {
      id: 6,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber();
  },

  updateNewMessageText(text) {
    this._state.dialogsPage.newMessageText = text;
    this._callSubscriber();
  },

  addPost() {
    const newPost = {
      id: 6,
      post: this._state.profilePage.newPostText,
      likes: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber();
  },

  updateNewPostText(text) {
    this._state.profilePage.newPostText = text;
    this._callSubscriber();
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

window.store = store;
