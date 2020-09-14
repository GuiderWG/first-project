import React from "react";
import s from './FriendsOnline.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";
import * as axios from "axios"

const FriendsOnline = ({setFriend, friends}) => {

  if (friends.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users?count=3').then(response =>{
      setFriend(response.data.items);
    });
  }

  let friendItems = friends.map(friend => {
    return <FriendsItem id={friend.id} name={friend.name} img={friend.photos.small} key={friend.id}/>
  })
  return (
      <div className={s.friends}>
        <div className={s.title}>Friends online</div>
        <div className={s.friendsGroup}>
          {friendItems}
        </div>
      </div>
  );
};

export default FriendsOnline;