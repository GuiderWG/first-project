import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    sidebar: state.navbar
  }
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;