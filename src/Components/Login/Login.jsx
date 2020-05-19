/* eslint-disable react/prop-types */
import React from 'react';
import './Login.scss';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../Common/FormsControl/Input';
import { required, maxLengthCreator } from '../../utilites/validators';

export const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      <LoginFormReducer onSubmit={onSubmit} />
    </div>
  );
};

const maxLength15 = maxLengthCreator(15);
const LoginForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form className="login__form" onSubmit={handleSubmit}>
      <div className="login__login-input">
        <Field
          placeholder="login"
          name="login"
          component={Input}
          validate={[required, maxLength15]}
        />
      </div>
      <div className="login__login-password">
        <Field
          placeholder="Password"
          name="password"
          component={Input}
          validate={[required, maxLength15]}
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
      <div className="login__login-button">
        <button
          type="submit"
          className="button is-info"
        >
          Login
        </button>
      </div>
    </form>
  );
};

const LoginFormReducer = reduxForm({ form: 'login' })(LoginForm);
