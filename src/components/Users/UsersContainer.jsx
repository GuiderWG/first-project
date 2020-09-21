import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
  followAC,
  setCurrentAC,
  setTotalCountAC,
  setUsersAC,
  setUsersMoreAC,
  unfollowAC
} from "../../redux/usersReducer";


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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;
