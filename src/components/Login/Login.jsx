import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/authReducer';
import s from './Login.module.css';

const LoginForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <Field placeholder={'Email'} name={'email'} component={'input'}/>
    </div>
    <div>
      <Field placeholder={'Password'} name={'password'} component={'input'}/>
    </div>
    <div className={s.checkbox}>
      <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> <span>remember me</span>
    </div>
    <div>
      <button>Login</button>
    </div>
  </form>
);

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  return (
    <div className={s.login}>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

export default compose(
  connect(null, { login, logout }),
)(Login);

//export default Login;
