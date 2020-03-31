/* eslint-disable react/prop-types */
import React from 'react';
import * as axios from 'axios';
import './Profile.scss';
import { connect } from 'react-redux';
import { Profile } from './Profile';
import { setUserProfileActionCreator } from '../../redux/reducers/profileReducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { setUserProfile } = this.props;
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/2', {
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
        {...this.props}
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


export default connect(setMapToProps, setDispatchToProps)(ProfileContainer);
