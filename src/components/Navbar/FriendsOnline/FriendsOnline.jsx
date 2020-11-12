import React from 'react';
import s from './FriendsOnline.module.css';
import FriendsItem from './FriendsItem/FriendsItem';

const FriendsOnline = (props) => {
  const friendItems = props.friends.map((friend) => (
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
