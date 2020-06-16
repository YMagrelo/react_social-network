/* eslint-disable react/sort-comp */
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
  savePhotoTC,
} from '../../redux/reducers/profileReducer';

class ProfileContainer extends React.Component {
  refreshProfile() {
    let { userId } = this.props.match.params;
    const { getUserProfileThunk, getStatusProfileThunk } = this.props;

    if (!userId) {
      userId = 6640;
    }

    getUserProfileThunk(userId);
    getStatusProfileThunk(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    const { profile, status, updateStatusProfileThunk } = this.props;

    return (
      <Profile
        isOwner={!this.props.match.params.userId}
        profile={profile}
        status={status}
        updateStatusProfileThunk={updateStatusProfileThunk}
        savePhoto={this.props.savePhoto}
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
  savePhoto: (file) => dispatch(savePhotoTC(file)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(ProfileContainer);
