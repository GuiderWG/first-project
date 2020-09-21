import React from "react";
import s from './FriendsOnline.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";
import * as axios from "axios"


class FriendsOnline extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users?count=4').then(response => {
      if (this.props.friends.length === 0) {
        this.props.setFriend(response.data.items);
      }
    });
  }

  render() {
    let friendItems = this.props.friends.map(friend => {
      return <FriendsItem id={friend.id} name={friend.name} img={friend.photos.small} key={friend.id}/>
    });
    return (
        <div className={s.friends}>
          <div className={s.title}>Friends online</div>
          <div className={s.friendsGroup}>
            {friendItems}
          </div>
        </div>
    );
  }
}

export default FriendsOnline;