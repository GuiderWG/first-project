import React from "react";
import s from "./Users.module.css";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
      <div className={s.users}>
        <ul className={s.nav}>
          {
            pages.map(page => {
              return <li onClick={() => {
                props.onPageChanged(page)
              }} className={props.currentPage === page ? s.current : ''}>{page}</li>
            })
          }
        </ul>
        {
          props.users.map(user => <div className={s.item} key={user.id}>
            <div className={s.leftCol}>
              <div className={s.photo}>
                <img src={user.photos.small ? user.photos.small : 'https://i.stack.imgur.com/T17Mh.png?s=328&g=1'}
                     alt=""/>
              </div>
              {user.followed
                  ? <button
                      className={`${s.button} ${s.button_gray}`}
                      onClick={() => {
                        props.unfollow(user.id)
                      }}>Unfollow</button>
                  : <button
                      className={`${s.button} ${s.button_red}`}
                      onClick={() => {
                        props.follow(user.id)
                      }}>Follow</button>}
            </div>
            <div className={s.rightCol}>
              <div className={s.info}>
                <div className={s.fullName}>
                  {user.name}
                </div>
                <span className={s.status}>{user.status}</span>
              </div>

              <div className={s.location}>
                <div className={s.country}>
                  {'user.location.country'}
                </div>
                <div className={s.city}>
                  {'user.location.city'}
                </div>
              </div>
            </div>
          </div>)
        }

        <button className={`${s.button} ${s.button_red}`}
                onClick={() => { props.onPageMore(props.currentPage) }}>{props.btnTextIsFetching ? 'Load...' : 'Show more'}</button>
      </div>
  )
}

export default Users;