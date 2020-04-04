/* eslint-disable react/prop-types */
import React from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { Header } from './Header';
import { setAuthUserDataActionCreator } from '../../redux/reducers/auth_reducer';
import { usersAPI } from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    const { setAuthUserData } = this.props;

    usersAPI.getAuthUserData()
      .then((data) => {
        if (data.resultCode === 0) {
          const { id, login, email } = data.data;
          setAuthUserData(id, login, email);
        }
      });
  }

  render() {
    return (
      <Header
        authUserData={this.props}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

const mapDispatchToProps = (dispatch) => ({
  setAuthUserData: (userId, login, email) => {
    dispatch(setAuthUserDataActionCreator(userId, login, email));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
