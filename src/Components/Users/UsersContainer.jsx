/* eslint-disable import/named */
import React from 'react';
import './Users.scss';
import { connect } from 'react-redux';
import {
  followActionCreator,
  unFollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  setUsersTotalCountActionCreator,
  setIsFetchingActionCreator,
  toggleFollowingProgressActionCreator,
} from '../../redux/reducers/usersReducer';
import { Users } from './Users';
import { Preloader } from '../Common/Preloader/Preloader';
import { getUsers } from '../../api/api';

class UsersContainer extends React.Component {
  
  componentDidMount() {
    this.props.toggleIsFetching(true);

    getUsers(this.props.pageSize, this.props.currentPage)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setUsersTotalCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
   
    getUsers(this.props.pageSize, pageNumber)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  }

  render() {
    return (
      <>
        {this.props.isFetching
      ? (
        <Preloader />
      )
      : null}
            
        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          setFollowed={this.props.setFollowed}
          setUnFollowed={this.props.setUnFollowed}
          onPageChanged={this.onPageChanged}
          followingProgress={this.props.followingProgress}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
      />
      </>
    );
  }
}


const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followingProgress: state.usersPage.followingProgress,
});

const mapDispatchToProps = (dispatch) => ({
  setFollowed: (userId) => dispatch(followActionCreator(userId)),
  setUnFollowed: (userId) => dispatch(unFollowActionCreator(userId)),
  setUsers: (users) => dispatch(setUsersActionCreator(users)),
  setCurrentPage: (pageNumber) => dispatch(setCurrentPageActionCreator(pageNumber)),
  setUsersTotalCount: (totalCount) => dispatch(setUsersTotalCountActionCreator(totalCount)),
  toggleIsFetching: (isFetching) => dispatch(setIsFetchingActionCreator(isFetching)),
  toggleFollowingProgress: (isFetching) => dispatch(toggleFollowingProgressActionCreator(isFetching)),
});

  export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
