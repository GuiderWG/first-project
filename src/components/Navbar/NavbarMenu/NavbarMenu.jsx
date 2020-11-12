import React from 'react';
import s from './NavbarMenu.module.css';
import LinkItem from './LinkItem/LinkItem';

const NavbarMenu = (props) => {
  const linkItems = props.links.map((link) => <LinkItem url={link.url} name={link.name} key={link.id} />);
  return <nav className={s.nav}>{linkItems}</nav>;
};

export default NavbarMenu;
