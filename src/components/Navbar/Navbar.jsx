import React from "react";
import s from './Navbar.module.css';
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import FriendsOnline from "./FriendsOnline/FriendsOnline";

const Navbar = (props) => {
  return (
      <div className={s.navBar}>
        <NavbarMenu links={props.state.menuLinks} />

        <div className={s.friendsOnline}>
            <FriendsOnline friends={props.state.friends} />
        </div>
      </div>

  );
};

export default Navbar;