/* eslint-disable import/named */
import React from 'react';
import * as axios from 'axios';
import './Users.scss';
import { connect } from 'react-redux';
import {
  followActionCreator,
  unFollowActionCreator,
  setUsersActionCreator,
  setCurrentPageActionCreator,
  setUsersTotalCountActionCreator,
  setIsFetchingActionCreator,
} from '../../redux/reducers/usersReducer';
import { Users } from './Users';
import { Preloader } from '../Common/Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`, {
        headers: {
          'API-KEY': '932d6a5e-9f13-471f-b3bb-9a946f84b9b5',
        },
      })
        .then((response) => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(response.data.items);
          this.props.setUsersTotalCount(response.data.totalCount);
        });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`, {
      headers: {
        'API-KEY': '932d6a5e-9f13-471f-b3bb-9a946f84b9b5',
      },
    })
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
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
});

const mapDispatchToProps = (dispatch) => ({
  setFollowed: (userId) => dispatch(followActionCreator(userId)),
  setUnFollowed: (userId) => dispatch(unFollowActionCreator(userId)),
  setUsers: (users) => dispatch(setUsersActionCreator(users)),
  setCurrentPage: (pageNumber) => dispatch(setCurrentPageActionCreator(pageNumber)),
  setUsersTotalCount: (totalCount) => dispatch(setUsersTotalCountActionCreator(totalCount)),
  toggleIsFetching: (isFetching) => dispatch(setIsFetchingActionCreator(isFetching)),
});

  export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
