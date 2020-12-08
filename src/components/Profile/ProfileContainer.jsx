import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Profile from './Profile';
import Preloader from '../common/preloader/preloader';
import { getStatus, getUserProfile, updateStatus } from '../../redux/profileReducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId){
        userId = this.props.authorizedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Profile {...this.props} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isFetching: state.profilePage.isFetching,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);
