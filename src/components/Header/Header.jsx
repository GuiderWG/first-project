import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import reactLogo from '../../assets/images/reactjs-ar21.svg';
import Preloader from '../common/preloader/preloader';

const Header = (props) => (
  <header className={s.header}>
    <img src={reactLogo} alt="" />
    <div className={s.loginBlock}>
      {props.isFetching ? <Preloader mini /> : props.isAuth ? props.login : <NavLink to="/Login">Login</NavLink>}
    </div>
  </header>
);

export default Header;
