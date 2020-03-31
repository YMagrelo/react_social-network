/* eslint-disable no-case-declarations */
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const sendPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (value) => ({
  type: UPDATE_NEW_POST,
  text: value,
});

export const setUserProfileActionCreator = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

const initialState = {
  posts: [
    { id: 1, post: 'Hello, how are you?', likes: 4 },
  ],
  newPostText: '',
  profile: null,
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

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    default:
      return state;
  }
};
