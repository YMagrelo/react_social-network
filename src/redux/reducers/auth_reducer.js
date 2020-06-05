import { stopSubmit } from 'redux-form';
import { authAPI } from '../../api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';

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

export const getAuthUserDataThunkCreator = () => async (dispatch) => {
  const response = await authAPI.me();

  if (response.data.resultCode === 0) {
    const { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const loginThunkCreator = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe);

  if (response.data.resultCode === 0) {
    dispatch(getAuthUserDataThunkCreator());
  } else {
    const { messages } = response.data;
    const action = stopSubmit('login', { _error: messages });
    dispatch(action);
  }
};

export const logoutThunkCreator = () => async (dispatch) => {
  const response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
