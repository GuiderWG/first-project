import React from 'react';
import * as axios from 'axios';
import s from './Users.module.css';

const Users = ({ setUsers, users, unfollow, follow }) => {
  const getUsers = () => {
    if (users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
        setUsers(response.data.items);
      });
    }
  };

  return (
    <div className={s.users}>
      <button onClick={getUsers} className={`${s.button} ${s.button_red} ${s.button_center}`}>
        Get Users
      </button>
      {users.map((user) => (
        <div className={s.item} key={user.id}>
          <div className={s.leftCol}>
            <div className={s.photo}>
              <img
                src={user.photos.small ? user.photos.small : 'https://i.stack.imgur.com/T17Mh.png?s=328&g=1'}
                alt=""
              />
            </div>
            {user.followed ? (
              <button
                className={`${s.button} ${s.button_gray}`}
                onClick={() => {
                  unfollow(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
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
      ))}
    </div>
  );
};

export default Users;
