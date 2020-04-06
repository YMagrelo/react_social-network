/* eslint-disable react/prop-types */
import React from 'react';
import './Profile.scss';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { Profile } from './Profile';
import { getUserProfileThunkCreator } from '../../redux/reducers/profileReducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let { userId } = this.props.match.params;
    const { getUserProfileThunk } = this.props;

    if (!userId) {
      userId = 6640;
    }

    getUserProfileThunk(userId);
  }

  render() {
    const { profile, isAuth } = this.props;

    if (!isAuth) return <Redirect to="/login" />;

    return (
      <Profile
        profile={profile}
      />
    );
  }
}

const setMapToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});
const setDispatchToProps = (dispatch) => ({
  getUserProfileThunk: (userId) => dispatch(getUserProfileThunkCreator(userId)),
});

const WhithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(setMapToProps, setDispatchToProps)(WhithUrlDataContainerComponent);
