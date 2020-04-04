/* eslint-disable import/named */
import React from 'react';
import './Users.scss';
import { connect } from 'react-redux';
import {
  setCurrentPageActionCreator,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator,
} from '../../redux/reducers/usersReducer';
import { Users } from './Users';
import { Preloader } from '../Common/Preloader/Preloader';

class UsersContainer extends React.Component {
  
  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(
      this.props.pageSize, this.props.setCurrentPage(pageNumber)
    );
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
          followSuccess={this.props.followSuccess}
          unfollowSuccess={this.props.unfollowSuccess}
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
  setCurrentPage: (pageNumber) => dispatch(setCurrentPageActionCreator(pageNumber)),
  getUsers: (pageSize, currentPage) => dispatch(getUsersThunkCreator(pageSize, currentPage)),
  followSuccess: (userId) => dispatch(followThunkCreator(userId)),
  unfollowSuccess: (userId) => dispatch(unfollowThunkCreator(userId)),
});

  export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
