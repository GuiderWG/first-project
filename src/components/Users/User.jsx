import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';

const User = ({ user, followingInProgress, follow, unfollow }) => {
  return (
    <div className={s.item}>
      <NavLink to={`/profile/${user.id}`}/>
      <div className={s.leftCol}>
        <div className={s.photo}>
          <img
            src={user.photos.small ? user.photos.small : 'https://i.stack.imgur.com/T17Mh.png?s=328&g=1'}
            alt=""
          />
        </div>
        {user.followed ? (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            className={`${s.button} ${s.button_gray}`}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            className={`${s.button} ${s.button_red}`}
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
      <div className={s.rightCol}>
        <div className={s.info}>
          <div className={s.fullName}>{user.name}</div>
          <span className={s.status}>{user.status}</span>
        </div>
        
        <div className={s.location}>
          <div className={s.country}>user.location.country</div>
          <div className={s.city}>user.location.city</div>
        </div>
      </div>
    </div>
  );
};

export default User;
