import React from 'react';
import { connect } from 'react-redux';
import FriendsOnline from './FriendsOnline';
import { getFriendsOnline } from '../../../redux/navbarReducer';

class FriendsOnlineContainer extends React.Component {
  componentDidMount() {
    this.props.getFriendsOnline();
  }

  render() {
    return <FriendsOnline friends={this.props.friends} />;
  }
}

const mapStateToProps = (state) => ({
  friends: state.navbar.friends,
});

export default connect(mapStateToProps, { getFriendsOnline })(FriendsOnlineContainer);
