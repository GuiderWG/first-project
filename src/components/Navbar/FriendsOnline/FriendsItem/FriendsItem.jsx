import React from "react";
import s from './FriendsItem.module.css';

const FriendsItem = (props) => {
  return (
      <div className={s.item}>
        <img src={props.img ? props.img : 'https://img.icons8.com/color/50/000000/administrator-male--v1.png'} alt="" className={s.img}/>
        <div className={s.name}>{props.name}</div>
      </div>
  );
};

export default FriendsItem;