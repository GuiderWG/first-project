import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Profile from './Profile';
import Preloader from '../common/preloader/preloader';
import { getUserProfile } from '../../redux/profileReducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { userId } = this.props.match.params;
    this.props.getUserProfile(userId);
  }

  render() {
    return <>{this.props.isFetching ? <Preloader /> : <Profile {...this.props} profile={this.props.profile} />}</>;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isFetching: state.profilePage.isFetching,
});

export default compose(connect(mapStateToProps, { getUserProfile }), withRouter)(ProfileContainer);
