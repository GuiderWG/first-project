import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Preloader from '../common/preloader/preloader';
import {getUserProfile} from '../../redux/profileReducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.getUserProfile(userId);
  }

  render() {
    return (
      <>
        {this.props.isFetching ?
          <Preloader/> :
          <Profile {...this.props}
                   profile={this.props.profile}/>}
      </>

    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
  };
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);