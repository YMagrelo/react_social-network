import { authAPI } from '../../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

const setAuthUserData = (userId, email, login, isAuth) => (
  {
    type: SET_USER_DATA,
    payload: {
      userId, login, email, isAuth,
    },
  }
);

export const getAuthUserDataThunkCreator = () => (dispatch) => {
  authAPI.me()
    .then((response) => {
      if (response.data.resultCode === 0) {
        const { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, login, email, true));
      }
    });
};

export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator(response.data.userId));
      }
    });
};

export const logoutThunkCreator = () => (dispatch) => {
  authAPI.logout()
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
};
