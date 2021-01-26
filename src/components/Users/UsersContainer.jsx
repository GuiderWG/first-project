import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {follow, requestUsers, getUsersMore, unfollow, setCurrentPage} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import {
  getBtnTextIsFetching,
  getCurrentPage, getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalCount, getUsers
} from '../../redux/usersSelectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize);
  }
  
  onPageChanged = (pageNum) => {
    const { getUsers, pageSize, setCurrentPage, getUsersMore } = this.props;
    getUsers(pageNum, pageSize);
    setCurrentPage(pageNum);
    getUsersMore(pageNum, pageSize);
    
  };
  
  onPageMore = (pageNum) => {
    const { getUsersMore, pageSize} = this.props;
    setCurrentPage(++pageNum);
    getUsersMore(pageNum, pageSize);
  };
  
  render() {
    const {isFetching} = this.props;
    return (
      <>
        {isFetching ? (
          <Preloader/>
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
  connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsers: requestUsers, getUsersMore }),
)(UsersContainer);
