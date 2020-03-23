import './Users.scss';
import { connect } from 'react-redux';
import { Users } from './Users';
import { followActionCreator, unFollowActionCreator, setUsersActionCreator } from '../../redux/reducers/usersReducer';

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
});

const mapDispatchToProps = (dispatch) => ({
  setFollowed: (userId) => dispatch(followActionCreator(userId)),
  setUnFollowed: (userId) => dispatch(unFollowActionCreator(userId)),
  setUsers: (users) => dispatch(setUsersActionCreator(users)),
});

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
