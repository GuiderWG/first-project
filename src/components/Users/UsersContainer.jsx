import React from "react";
import {connect} from "react-redux";
import {
  followAC,
  setCurrentAC,
  setTotalCountAC,
  setUsersAC,
  setUsersMoreAC,
  unfollowAC
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
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
    return <Users totalCount={this.props.totalCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  users={this.props.users}
                  onPageChanged={this.onPageChanged}
                  onPageMore={this.onPageMore}
                  unfollow={this.props.unfollow}
                  follow={this.props.follow}/>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrent: (pageNum) => {
      dispatch(setCurrentAC(pageNum));
    },
    setTotalCount: (totalCount) => {
      dispatch(setTotalCountAC(totalCount))
    },
    setUsersMore: (users) => {
      dispatch(setUsersMoreAC(users))
    },

  }
};

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);
