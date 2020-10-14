import React from 'react';
import {connect} from 'react-redux';
import {
  btnIsFetching,
  follow,
  setCurrent,
  setTotalCount,
  setUsers,
  setUsersMore, toggleIsFetching,
  unfollow
} from '../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/preloader/preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(response.data.items);
          this.props.setTotalCount(response.data.totalCount);
        });
  }

  onPageChanged = (pageNum) => {
    this.props.setCurrent(pageNum);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
    });
  };

  onPageMore = (pageNum) => {
    this.props.btnIsFetching(true);
    this.props.setCurrent(++pageNum);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`).then(response => {
      this.props.btnIsFetching(false);
      this.props.setUsersMore(response.data.items);
    });
  };

  render() {
    return (
        <>
          {this.props.isFetching ?
              <Preloader/> :
              <Users totalCount={this.props.totalCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     users={this.props.users}
                     onPageChanged={this.onPageChanged}
                     onPageMore={this.onPageMore}
                     unfollow={this.props.unfollow}
                     follow={this.props.follow}
                     btnTextIsFetching={this.props.btnTextIsFetching}/>}


        </>
    );

  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    btnTextIsFetching: state.usersPage.btnTextIsFetching,
  };
};

export default connect(mapStateToProps,
    {
      follow,
      setCurrent,
      setTotalCount,
      setUsers,
      setUsersMore,
      unfollow,
      toggleIsFetching,
      btnIsFetching
    })(UsersContainer);
