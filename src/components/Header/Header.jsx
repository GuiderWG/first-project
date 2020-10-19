import React from "react";
import s from './Header.module.css';
import reactLogo from '../../assets/images/reactjs-ar21.svg'
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  return (
      <header className={s.header}>
        <img src={reactLogo} alt=""/>
        <div className={s.loginBlock}>
          {props.isAuth ? props.login: <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </header>
  );
};

export default Header;