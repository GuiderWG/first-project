import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { follow, requestUsers, getUsersMore, setCurrent, unfollow } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import {
  getBtnTextIsFetching,
  getCurrentPage, getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalCount, getUsers
} from '../../redux/usersSelectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNum) => {
    this.props.getUsers(pageNum, this.props.pageSize);
    this.props.setCurrent(pageNum);
  
    this.props.getUsersMore(pageNum, this.props.pageSize);

  };

  onPageMore = (pageNum) => {
    this.props.getUsersMore(pageNum, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            onPageMore={this.onPageMore}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            followingInProgress={this.props.followingInProgress}
            btnTextIsFetching={this.props.btnTextIsFetching}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalCount: getTotalCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  btnTextIsFetching: getBtnTextIsFetching(state),
  followingInProgress: getFollowingInProgress(state),
});

export default compose(
  connect(mapStateToProps, { follow, unfollow, setCurrent, getUsers: requestUsers, getUsersMore }),
)(UsersContainer);
