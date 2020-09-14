import React from "react";
import {connect} from "react-redux";
import FriendsOnline from "./FriendsOnline";
import {setFriendsOnlineAC} from "../../../redux/navbarReducer";

let mapStateToProps = (state) => {
  return {
    friends: state.navbar.friends
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    setFriend: (friends) => {
      dispatch(setFriendsOnlineAC(friends));
    }
  }

};

const FriendsOnlineContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsOnline);

export default FriendsOnlineContainer;