/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './Profile.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Profile } from './Profile';
import { getUserProfileThunkCreator } from '../../redux/reducers/profileReducer';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';

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
    const { profile } = this.props;

    return (
      <Profile
        profile={profile}
      />
    );
  }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
const mapDispatchToProps = (dispatch) => ({
  getUserProfileThunk: (userId) => dispatch(getUserProfileThunkCreator(userId)),
});


const WhithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, mapDispatchToProps)(WhithUrlDataContainerComponent);
