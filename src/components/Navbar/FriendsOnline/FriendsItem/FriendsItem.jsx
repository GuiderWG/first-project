import React from "react";
import s from './FriendsItem.module.css';
import {NavLink} from 'react-router-dom';

const FriendsItem = (props) => {
  return (
      <NavLink to={`/profile/${props.id}`} className={s.item}>
        <img src={props.img ? props.img : 'https://img.icons8.com/color/50/000000/administrator-male--v1.png'} alt="" className={s.img}/>
        <div className={s.name}>{props.name}</div>
      </NavLink>
  );
};

export default FriendsItem;