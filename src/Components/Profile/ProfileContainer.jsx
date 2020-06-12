/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './Profile.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { Profile } from './Profile';
import {
  getUserProfileThunkCreator,
  getStatusProfileThunkCreator,
  updateStatusProfileThunkCreator,
} from '../../redux/reducers/profileReducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let { userId } = this.props.match.params;
    const { getUserProfileThunk, getStatusProfileThunk } = this.props;

    if (!userId) {
      userId = 6640;
    }

    getUserProfileThunk(userId);
    getStatusProfileThunk(userId);
  }

  componentDidUpdate() {
    let { userId } = this.props.match.params;
    const { getUserProfileThunk, getStatusProfileThunk } = this.props;

    if (!userId) {
      userId = 6640;
    }

    getUserProfileThunk(userId);
    getStatusProfileThunk(userId);
  }

  render() {
    const { profile, status, updateStatusProfileThunk } = this.props;

    return (
      <Profile
        profile={profile}
        status={status}
        updateStatusProfileThunk={updateStatusProfileThunk}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

const mapDispatchToProps = (dispatch) => ({
  getUserProfileThunk: (userId) => dispatch(getUserProfileThunkCreator(userId)),
  getStatusProfileThunk: (userId) => dispatch(getStatusProfileThunkCreator(userId)),
  updateStatusProfileThunk: (status) => dispatch(updateStatusProfileThunkCreator(status)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(ProfileContainer);
