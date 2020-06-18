/* eslint-disable react/prop-types */
import React from 'react';
import './Login.scss';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Input } from '../Common/FormsControl/Input';
import { required, maxLengthCreator } from '../../utilites/validators';
import { loginThunkCreator, logoutThunkCreator } from '../../redux/reducers/auth_reducer';

const Login = (props) => {
  const { isAuth } = props;
  const onSubmit = (formData) => {
    props.loginThunkCreator(formData.email, formData.password, formData.rememberMe);
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      <LoginFormReducer
        onSubmit={onSubmit}
        isAuth={isAuth}
      />
    </div>
  );
};

const maxLength30 = maxLengthCreator(30);
const LoginForm = (props) => {
  const { handleSubmit, isAuth, error } = props;

  return (
    <form className="login__form" onSubmit={handleSubmit}>
      <div className="login__login-input">
        <Field
          placeholder="email"
          name="email"
          component={Input}
          validate={[required, maxLength30]}
        />
      </div>
      <div className="login__login-password">
        <Field
          placeholder="Password"
          name="password"
          type="password"
          component={Input}
          validate={[required, maxLength30]}
        />
      </div>
      <div className="checkbox">
        <Field
          type="checkbox"
          component="input"
          name="rememberMe"
          validate={[required]}
        />
      </div>
      {error && <div className="login__generalError">{error}</div>}
      <div className="login__login-button">
        {isAuth ? (
          <button
            type="submit"
            className="button is-info"
          >
            Logout
          </button>
        ) : (
          <button
            type="submit"
            className="button is-info"
          >
            Login
          </button>
        )}
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const LoginFormReducer = reduxForm({ form: 'login' })(LoginForm);
export default connect(mapStateToProps, { loginThunkCreator, logoutThunkCreator })(Login);
