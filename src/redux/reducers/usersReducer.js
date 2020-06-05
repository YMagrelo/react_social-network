import { usersAPI } from '../../api/api';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'users/SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';


const initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingProgress: [],
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
        users: [...action.users],
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber,
      };

    case SET_USERS_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unFollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const setCurrentPageActionCreator = (pageNumber) => (
  { type: SET_CURRENT_PAGE, pageNumber }
);
export const setUsersTotalCountActionCreator = (totalCount) => (
  { type: SET_USERS_TOTAL_COUNT, totalCount }
);
export const toggleIsFetchingActionCreator = (isFetching) => (
  { type: TOGGLE_IS_FETCHING, isFetching }
);
export const toggleFollowingProgressActionCreator = (isFetching, userId) => (
  { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId }
);

export const getUsersThunkCreator = (pageSize, currentPage) => async (dispatch) => {
  dispatch(toggleIsFetchingActionCreator(true));

  const response = await usersAPI.getUsers(pageSize, currentPage);

  dispatch(toggleIsFetchingActionCreator(false));
  dispatch(setUsersActionCreator(response.items));
  dispatch(setUsersTotalCountActionCreator(response.totalCount));
};

export const followThunkCreator = (userId) => async (dispatch) => {
  dispatch(toggleFollowingProgressActionCreator(true, userId));
  const response = await usersAPI.follow(userId);

  if (response.data.resultCode === 0) {
    dispatch(followActionCreator(userId));
  }
  dispatch(toggleFollowingProgressActionCreator(false, userId));
};

export const unfollowThunkCreator = (userId) => async (dispatch) => {
  dispatch(toggleFollowingProgressActionCreator(true, userId));
  const response = await usersAPI.unfollow(userId);

  if (response.data.resultCode === 0) {
    dispatch(unFollowActionCreator(userId));
  }
  dispatch(toggleFollowingProgressActionCreator(false, userId));
};
