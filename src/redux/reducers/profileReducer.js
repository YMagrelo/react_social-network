/* eslint-disable no-case-declarations */
import { usersAPI, profileAPI } from '../../api/api';

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'profile/SET_PROFILE_STATUS';
const SET_PHOTO_SUCCESS = 'profile/SET_PHOTO_SUCCESS';

const initialState = {
  posts: [
    { id: 3, post: 'empty line', likes: 1 },
    { id: 4, post: 'My girl, my girl don\'t lie to me, tell me where did you sleep last night, in the pines, in the pines where the sun don\'t ever shine, I would shiver the whole night through', likes: 1 },
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

    case SET_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };

    default:
      return state;
  }
};

export const sendPostActionCreator = (addPost) => ({ type: ADD_POST, addPost });

const setUserProfileAC = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

const setProfileStatusAC = (status) => ({
  type: SET_PROFILE_STATUS,
  status,
});

const setPhotoSuccesAC = (photos) => ({
  type: SET_PHOTO_SUCCESS,
  photos,
});

export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
  const response = await profileAPI.getUserProfile(userId);

  dispatch(setUserProfileAC(response.data));
};

export const getStatusProfileThunkCreator = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);

  dispatch(setProfileStatusAC(response.data));
};

export const updateStatusProfileThunkCreator = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setProfileStatusAC(status));
  }
};

export const savePhotoTC = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(setPhotoSuccesAC(response.data.data.photos));
  }
};

export const saveProfileTC = (profile) => async (dispatch, getState) => {
  const { userId } = getState().auth;

  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(setUserProfileAC(userId));
  }
};
