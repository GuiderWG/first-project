import React from "react";
import s from './Navbar.module.css';
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import FriendsOnline from "./FriendsOnline/FriendsOnline";

const Navbar = (props) => {

  let state = props.sidebar;
  return (
      <div className={s.navBar}>
        <NavbarMenu links={state.menuLinks} />

        <div className={s.friendsOnline}>
            <FriendsOnline friends={state.friends} />
        </div>
      </div>

  );
};

export default Navbar;