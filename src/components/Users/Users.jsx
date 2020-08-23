import React from "react";
import s from "./Users.module.css"

let Users = ({setUsers, users, unfollow, follow}) => {

  if (users.length === 0) {
    setUsers([
      {
        id: 1,
        followed: false,
        fullName: 'Dmitriy',
        status: 'I\'m okay',
        imgUrl: 'https://i.stack.imgur.com/T17Mh.png?s=328&g=1',
        location: {city: 'Minsk', country: 'Belarus'}
      },
      {
        id: 2,
        followed: false,
        fullName: 'Vladimir',
        status: 'The day is cold now',
        imgUrl: 'https://i.stack.imgur.com/T17Mh.png?s=328&g=1',
        location: {city: 'Samara', country: 'Russia'}
      },
      {
        id: 3,
        followed: true,
        fullName: 'Rail',
        status: 'I hope that everything alright',
        imgUrl: 'https://i.stack.imgur.com/T17Mh.png?s=328&g=1',
        location: {city: 'Kiev', country: 'Ukraine'}
      },
      {
        id: 4,
        followed: false,
        fullName: 'Jane',
        status: 'it looks very strange',
        imgUrl: 'https://i.stack.imgur.com/T17Mh.png?s=328&g=1',
        location: {city: 'Paris', country: 'France'}
      },
    ])
  }


  return (
      <div className={s.users}>
        {
          users.map(user => <div className={s.item} key={user.id}>
            <div className={s.leftCol}>
              <div className={s.photo}>
                <img src={user.imgUrl} alt=""/>
              </div>
              {user.followed
                  ? <button
                      className={`${s.button} ${s.button_gray}`}
                      onClick={() => {unfollow(user.id)}}>Unfollow</button>
                  : <button
                      className={`${s.button} ${s.button_red}`}
                      onClick={() => {follow(user.id)}}>Follow</button>}
            </div>
            <div className={s.rightCol}>
              <div className={s.info}>
                <div className={s.fullName}>
                  {user.fullName}
                </div>
                <span className={s.status}>{user.status}</span>
              </div>

              <div className={s.location}>
                <div className={s.country}>
                  {user.location.country}
                </div>
                <div className={s.city}>
                  {user.location.city}
                </div>
              </div>
            </div>
          </div>)
        }

      </div>
  )
}

export default Users;