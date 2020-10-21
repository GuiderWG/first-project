import * as axios from 'axios';
import React from 'react';
import {connect} from 'react-redux';
import {setAuthUserData, toggleIsFetching} from '../../redux/authReducer';
import Header from './Header';
import {usersAPI} from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI
      .getMyProfile()
      .then(data => {
        if (data.resultCode === 0) {
          let {id, email, login} = data.data;
          this.props.setAuthUserData(id, email, login);

          // TODO Запрос к тек. пользователю чтоб вывести фото
          // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(response => {})
        }

        this.props.toggleIsFetching(false);
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
  };
};

export default connect(mapStateToProps, {setAuthUserData, toggleIsFetching})(HeaderContainer);