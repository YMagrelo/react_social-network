/* eslint-disable react/prop-types */
import React from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { Header } from './Header';
import { setAuthUserDataThunkCreator } from '../../redux/reducers/auth_reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    const { setAuthUserDataThunk } = this.props;
    setAuthUserDataThunk();
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
  setAuthUserDataThunk: () => dispatch(setAuthUserDataThunkCreator()),
});


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
