/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { Header } from './Header';
import { getAuthUserDataThunkCreator, logoutThunkCreator } from '../../redux/reducers/auth_reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    const { setAuthUserDataThunk } = this.props;
    setAuthUserDataThunk();
  }

  render() {
    return (
      <Header
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

const mapDispatchToProps = (dispatch) => ({
  setAuthUserDataThunk: () => dispatch(getAuthUserDataThunkCreator()),
  handleLogout: () => dispatch(logoutThunkCreator()),
});


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
