/* eslint-disable no-case-declarations */
import { usersAPI, profileAPI } from '../../api/api';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

const initialState = {
  posts: [
    { id: 1, post: 'Hello, how are you?', likes: 4 },
  ],
  profile: null,
  status: '',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 6,
        post: action.addPost,
        likes: 0,
      };

      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, newPost],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_PROFILE_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

export const sendPostActionCreator = (addPost) => ({ type: ADD_POST, addPost });

const setUserProfileActionCreator = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

const setProfileStatusAC = (status) => ({
  type: SET_PROFILE_STATUS,
  status,
});

export const getUserProfileThunkCreator = (userId) => (dispatch) => {
  usersAPI.getUserProfile(userId)
    .then((response) => {
      dispatch(setUserProfileActionCreator(response.data));
    });
};

export const getStatusProfileThunkCreator = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then((response) => {
      dispatch(setProfileStatusAC(response.data));
    });
};

export const updateStatusProfileThunkCreator = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setProfileStatusAC(status));
      }
    });
};
