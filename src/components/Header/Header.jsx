import React from "react";
import s from './Header.module.css';
import reactLogo from '../../assets/images/reactjs-ar21.svg'
import {NavLink} from 'react-router-dom';
import Preloader from '../common/preloader/preloader';

const Header = (props) => {
  return (
      <header className={s.header}>
        <img src={reactLogo} alt=""/>
        <div className={s.loginBlock}>
          {props.isFetching ? <Preloader mini={true}/> : props.isAuth ? props.login: <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </header>
  );
};

export default Header;