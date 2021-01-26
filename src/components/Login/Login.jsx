import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/authReducer';
import s from './Login.module.css';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validation/validators';
import { Redirect } from 'react-router-dom';

const LoginForm = ({ handleSubmit, error }) => (
  <form onSubmit={handleSubmit}>
    {createField('Email', 'email', required, Input)}
    {createField('Password', 'password', required, Input, {type: 'password'})}
    {createField(null, 'rememberMe', null, Input, {type: 'checkbox'}, 'remember me')}
    
    {error && <div className={s.formSummaryError}>{error}</div>}
    <div>
      <button>Login</button>
    </div>
  </form>
);

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = ({ login, isAuth }) => {
  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe);
  };
  
  if (isAuth) {
    return <Redirect to={'/profile'}/>;
  }
  
  return (
    <div className={s.login}>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});


export default compose(
  connect(mapStateToProps, { login, logout }),
)(Login);

//export default Login;
