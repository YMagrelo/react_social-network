/* eslint-disable no-case-declarations */
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

export const sendPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (value) => ({
  type: UPDATE_NEW_POST,
  text: value,
});

const initialState = {
  posts: [
    { id: 1, post: 'Hello, how are you?', likes: 4 },
    { id: 2, post: 'I don\'t have', likes: 2 },
    { id: 3, post: 'I do', likes: 22 },
  ],
  newPostText: '',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 6,
        post: state.newPostText,
        likes: 0,
      };

      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost],
      };

    case UPDATE_NEW_POST:
      return {
        ...state,
        newPostText: action.text,
      };

    default:
      return state;
  }
};
