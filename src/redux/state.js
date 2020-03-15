import { renderEntireTree } from "../render";

export const state = {
  profilePage: {
    posts: [
      { id: 1, post: 'Hello, how are you?', likes: 4 },
      { id: 2, post: 'I\'m fine', likes: 8 },
      { id: 3, post: 'Do you have some weed?', likes: 9 },
      { id: 4, post: 'I don\'t have', likes: 2 },
      { id: 5, post: 'I do', likes: 22 },
    ],
    newPostText: '',
  },
  dialogsPage: {
    messages: [
      { id: 1, message: 'Hello, how are you?' },
      { id: 2, message: 'I\'m fine' },
      { id: 3, message: 'Do you have some weed?' },
      { id: 4, message: 'I don\'t have' },
      { id: 5, message: 'I do' },
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
};

export const addNewMessage = () => {
  const newMessage = {
    id: 6,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  renderEntireTree(state);
};

export const updateNewMessageText = (text) => {
  state.dialogsPage.newMessageText = text;
  renderEntireTree(state);
};

export const addPost = () => {
  const newPost = {
    id: 6,
    post: state.profilePage.newPostText,
    likes: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
};

export const updateNewPostText = (text) => {
  state.profilePage.newPostText = text;
  renderEntireTree(state);
};
