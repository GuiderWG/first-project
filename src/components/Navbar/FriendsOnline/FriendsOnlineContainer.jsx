import React from "react";
import {connect} from "react-redux";
import FriendsOnline from "./FriendsOnline";
import {setFriendsOnlineAC} from "../../../redux/navbarReducer";
import * as axios from "axios";

class FriendsOnlineContainer extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users?count=4').then(response => {
      if (this.props.friends.length === 0) {
        this.props.setFriend(response.data.items);
      }
    });
  }

  render() {
    return <FriendsOnline friends={this.props.friends} />
  }
}

let mapStateToProps = (state) => {
  return {
    friends: state.navbar.friends
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setFriend: (friends) => {
      dispatch(setFriendsOnlineAC(friends));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsOnlineContainer);