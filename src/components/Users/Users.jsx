import React from "react";
import s from "./Users.module.css"
import * as axios from "axios"

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
    });
  }

  onPageChanged = (pageNum) => {
    this.props.setCurrent(pageNum);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items);
    });
  }

  onPageMore = (pageNum) => {
    this.props.setCurrent(++pageNum);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsersMore(response.data.items);
    });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);

    let pages = [];

    for (let i=1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
        <div className={s.users}>
          <ul className={s.nav}>
            {
              pages.map(page => {
                return <li onClick={(e) => {this.onPageChanged(page)}} className={this.props.currentPage === page  ? s.current : ''}>{page}</li>
              })
            }
          </ul>
          {
            this.props.users.map(user => <div className={s.item} key={user.id}>
              <div className={s.leftCol}>
                <div className={s.photo}>
                  <img src={user.photos.small ? user.photos.small : 'https://i.stack.imgur.com/T17Mh.png?s=328&g=1'}
                       alt=""/>
                </div>
                {user.followed
                    ? <button
                        className={`${s.button} ${s.button_gray}`}
                        onClick={() => {
                          this.props.unfollow(user.id)
                        }}>Unfollow</button>
                    : <button
                        className={`${s.button} ${s.button_red}`}
                        onClick={() => {
                          this.props.follow(user.id)
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

         <button className={`${s.button} ${s.button_red}`} onClick={() => {this.onPageMore(this.props.currentPage)}}>Show more</button>
        </div>
    )
  }
}

export default Users;