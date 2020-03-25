import './Users.scss';
import { connect } from 'react-redux';
import { UsersClass } from './UsersClass';
import {
  followActionCreator, unFollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setUsersTotalCountActionCreator,
} from '../../redux/reducers/usersReducer';

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  setFollowed: (userId) => dispatch(followActionCreator(userId)),
  setUnFollowed: (userId) => dispatch(unFollowActionCreator(userId)),
  setUsers: (users) => dispatch(setUsersActionCreator(users)),
  setCurrentPage: (pageNumber) => dispatch(setCurrentPageActionCreator(pageNumber)),
  setUsersTotalCount: (totalCount) => dispatch(setUsersTotalCountActionCreator(totalCount)),
});

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);
