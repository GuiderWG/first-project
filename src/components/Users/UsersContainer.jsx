import React from 'react';
import {connect} from 'react-redux';
import {
  follow, 
  getUsers,
  getUsersMore,
  setCurrent,
  unfollow
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  // onPageChanged = (pageNum) => {
  //   this.props.getUsers(pageNum, this.props.pageSize);
  //   this.props.setCurrent(pageNum);
  //
  //   usersAPI.getUsers(pageNum, this.props.pageSize)
  //     .then(data => {
  //       this.props.setUsers(data.items);
  //     });
  //
  // };

  onPageMore = (pageNum) => {
    this.props.getUsersMore(pageNum, this.props.pageSize)
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
    unfollow,
    setCurrent,
    getUsers,
    getUsersMore
  })(UsersContainer);
