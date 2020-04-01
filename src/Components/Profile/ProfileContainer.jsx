/* eslint-disable react/prop-types */
import React from 'react';
import './Profile.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as axios from 'axios';
import { Profile } from './Profile';
import { setUserProfileActionCreator } from '../../redux/reducers/profileReducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let { userId } = this.props.match.params;
    const { setUserProfile } = this.props;

    if (!userId) {
      userId = 6640;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
      headers: {
        'API-KEY': '932d6a5e-9f13-471f-b3bb-9a946f84b9b5',
      },
    })
      .then((response) => {
        setUserProfile(response.data);
      });
  }

  render() {
    const { profile } = this.props;
    return (
      <Profile
        profile={profile}
      />
    );
  }
}

const setMapToProps = (state) => ({
  profile: state.profilePage.profile,
});
const setDispatchToProps = (dispatch) => ({
  setUserProfile: (profile) => dispatch(setUserProfileActionCreator(profile)),
});

const WhithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(setMapToProps, setDispatchToProps)(WhithUrlDataContainerComponent);
