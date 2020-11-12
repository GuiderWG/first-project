import React from 'react';
import s from './Navbar.module.css';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import FriendsOnlineContainer from './FriendsOnline/FriendsOnlineContainer';

const Navbar = (props) => {
  const state = props.sidebar;
  return (
    <div className={s.navBar}>
      <NavbarMenu links={state.menuLinks} />

      <div className={s.friendsOnline}>
        <FriendsOnlineContainer friends={state.friends} />
      </div>
    </div>
  );
};

export default Navbar;
