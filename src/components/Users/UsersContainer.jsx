import React from 'react';
import {connect} from 'react-redux';
import {
  btnIsFetching,
  follow,
  setCurrent,
  setTotalCount,
  setUsers,
  setUsersMore, toggleIsFetching, toggleIsFollowing,
  unfollow
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import {usersAPI} from '../../api/api';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });

  }

  // onPageChanged = (pageNum) => {
  //   this.props.setCurrent(pageNum);
  //
  //   usersAPI.getUsers(pageNum, this.props.pageSize)
  //     .then(data => {
  //       this.props.setUsers(data.items);
  //     });
  //
  // };

  onPageMore = (pageNum) => {
    this.props.btnIsFetching(true);
    this.props.setCurrent(++pageNum);

    usersAPI
      .getUsers(pageNum, this.props.pageSize)
      .then(response => {
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
                 followingInProgress={this.props.followingInProgress}
                 toggleIsFollowing={this.props.toggleIsFollowing}
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
    followingInProgress: state.usersPage.followingInProgress,
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
    btnIsFetching,
    toggleIsFollowing
  })(UsersContainer);
