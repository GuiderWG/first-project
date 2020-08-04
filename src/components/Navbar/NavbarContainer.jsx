import React from "react";
import Navbar from "./Navbar";

const NavbarContainer = (props) => {
  let state = props.store.getState().navbar;
  return (<Navbar sidebar={state} />);
};

export default NavbarContainer;