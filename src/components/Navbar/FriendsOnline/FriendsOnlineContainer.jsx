import React from "react";
import {connect} from "react-redux";
import FriendsOnline from "./FriendsOnline";
import {setFriendsOnline} from "../../../redux/navbarReducer";
import * as axios from "axios";
import {usersAPI} from '../../../api/api';

class FriendsOnlineContainer extends React.Component {
  componentDidMount() {
    usersAPI
      .getUsers(1, 4)
      .then(response => {
      if (this.props.friends.length === 0) {
        this.props.setFriendsOnline(response.data.items);
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

// let mapDispatchToProps = (dispatch) => {
//   return {
//     setFriend: (friends) => {
//       dispatch(setFriendsOnlineAC(friends));
//     }
//   }
// }

export default connect(mapStateToProps, {setFriendsOnline})(FriendsOnlineContainer);