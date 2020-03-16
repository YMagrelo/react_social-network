export const store = {
  state: {
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

  renderEntireTree() {
    console.log('khkhkh');
  },

  getState() {
    return this.state;
  },

  addNewMessage() {
    const newMessage = {
      id: 6,
      message: this.state.dialogsPage.newMessageText,
    };
    this.state.dialogsPage.messages.push(newMessage);
    this.state.dialogsPage.newMessageText = '';
    this.renderEntireTree();
  },

  updateNewMessageText(text) {
    this.state.dialogsPage.newMessageText = text;
    this.renderEntireTree();
  },

  addPost() {
    const newPost = {
      id: 6,
      post: this.state.profilePage.newPostText,
      likes: 0,
    };
    this.state.profilePage.posts.push(newPost);
    this.state.profilePage.newPostText = '';
    this.renderEntireTree();
  },

  updateNewPostText(text) {
    this.state.profilePage.newPostText = text;
    this.renderEntireTree();
  },

  callback(observer) {
    this.renderEntireTree = observer;
  },
};
