/* eslint-disable react/prop-types */
import React from 'react';
import * as axios from 'axios';
import './Header.scss';
import { connect } from 'react-redux';
import { Header } from './Header';
import { setAuthUserDataActionCreator } from '../../redux/reducers/auth_reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    const { setAuthUserData } = this.props;
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      headers: {
        'API-KEY': '932d6a5e-9f13-471f-b3bb-9a946f84b9b5',
      },
      withCredentials: true,
    })
      .then((response) => {
        if (response.data.resultCode === 0) {
          const { id, login, email } = response.data.data;
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
