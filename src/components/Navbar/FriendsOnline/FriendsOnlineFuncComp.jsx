import React from 'react';
import * as axios from 'axios';
import s from './FriendsOnline.module.css';
import FriendsItem from './FriendsItem/FriendsItem';

const FriendsOnline = ({ setFriend, friends }) => {
  if (friends.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users?count=3').then((response) => {
      setFriend(response.data.items);
    });
  }

  const friendItems = friends.map((friend) => (
    <FriendsItem id={friend.id} name={friend.name} img={friend.photos.small} key={friend.id} />
  ));
  return (
    <div className={s.friends}>
      <div className={s.title}>Friends online</div>
      <div className={s.friendsGroup}>{friendItems}</div>
    </div>
  );
};

export default FriendsOnline;
