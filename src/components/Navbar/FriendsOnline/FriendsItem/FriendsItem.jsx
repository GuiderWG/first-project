import React from "react";
import s from './FriendsItem.module.css';

const FriendsItem = (props) => {
  return (
      <div className={s.item}>
        <img src={props.img} alt="" className={s.img}/>
        <div className={s.name}>{props.name}</div>
      </div>
  );
};

export default FriendsItem;