import React from "react";
import s from "./Users.module.css"

let Users = (props) => {
  return (
      <div className={s.users}>
        {
          props.users.map(user =>  <div className={s.item} key={user.id}>
            <div className={s.leftCol}>
              <div className={s.photo}>
                <img src={user.imgUrl} alt=""/>
              </div>
              {user.followed
                  ? <button className={`${s.button} ${s.button_gray}`} onClick={() => { props.unfollow(user.id) } }>Unfollow</button>
                  : <button className={`${s.button} ${s.button_red}`} onClick={() => { props.follow(user.id) }}>Follow</button>}
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