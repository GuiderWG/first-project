import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/authReducer';
import s from './Login.module.css';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validation/validators';
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <Field placeholder={'Email'} name={'email'} component={Input} validate={required}/>
    </div>
    <div>
      <Field placeholder={'Password'} name={'password'} component={Input} validate={required}/>
    </div>
    <div className={s.checkbox}>
      <Field type={'checkbox'} name={'rememberMe'} component={Input}/> <span>remember me</span>
    </div>
    {props.error && <div className={s.formSummaryError}>{props.error}</div>}
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

  if (props.isAuth) {
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
