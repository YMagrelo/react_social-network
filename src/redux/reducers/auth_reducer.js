import { authAPI } from '../../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthUserDataActionCreator = (userId, login, email) => (
  { type: SET_USER_DATA, data: { userId, login, email } }
);

export const setAuthUserDataThunkCreator = () => (dispatch) => {
  authAPI.getAuthUserData()
    .then((data) => {
      if (data.resultCode === 0) {
        const { id, login, email } = data.data;
        dispatch(setAuthUserDataActionCreator(id, login, email));
      }
    });
};
