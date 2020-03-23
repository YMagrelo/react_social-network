/* eslint-disable no-case-declarations */
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


const initialState = {
  users: [
    {
      id: 1, fullName: 'Vital\'ka K.', status: 'hard working', followed: true, location: { city: 'Kyiv', country: 'Ukraine' }, photoUrl: 'http://surl.li/bful',
    },
    {
      id: 2, fullName: 'Petro B.', status: 'not studying', followed: false, location: { city: 'Zhmerinka', country: 'Ukraine' }, photoUrl: 'http://surl.li/bfun',
    },
    {
      id: 3, fullName: 'Eduardo M.', status: 'on quarantine', followed: true, location: { city: 'Gorishny Plavny', country: 'Ukraine' }, photoUrl: 'http://surl.li/bfur',
    },
  ],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true,
            };
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: false,
            };
          }
          return user;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };

    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unFollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
