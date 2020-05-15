/* eslint-disable react/prop-types */
import React from 'react';
import './Login.scss';
import { Field, reduxForm } from 'redux-form';

export const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <LoginFormReducer onSubmit={onSubmit} />
    </div>
  );
};


const LoginForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form className="login__form" onSubmit={handleSubmit}>
      <div className="login__login-input">
        <Field type="text" placeholder="login" name="login" component="input" />
      </div>
      <div className="login__login-password">
        <Field type="text" placeholder="Password" name="password" component="input" />
      </div>
      <div className="login__login-checkbox">
        <Field type="checkbox" component="input" name="rememberMe" />
      </div>
      <div className="login__login-button">
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

const LoginFormReducer = reduxForm({ form: 'login' })(LoginForm);
