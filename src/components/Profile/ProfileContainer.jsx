import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile, toggleIsFetching} from '../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
import Preloader from '../common/preloader/preloader';
import {usersAPI} from '../../api/api';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsersProfile(userId)
      .then(data => {
        this.props.setUserProfile(data);
        this.props.toggleIsFetching(false);
      });
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

export default connect(mapStateToProps, {setUserProfile, toggleIsFetching})(WithUrlDataContainerComponent);