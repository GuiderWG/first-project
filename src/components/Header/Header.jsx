import React from "react";
import s from './Header.module.css';
import reactLogo from '../../assets/images/reactjs-ar21.svg'

const Header = () => {
  return (
      <header className={s.header}><img src={reactLogo} alt=""/></header>
  );
};

export default Header;