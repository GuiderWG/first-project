import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state) => ({
  sidebar: state.navbar,
});

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
