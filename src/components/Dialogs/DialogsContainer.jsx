import React from "react";
import {addMessageActionCreate, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogsPage,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessage: (body) => {
      dispatch(updateNewMessageActionCreator(body));
    },
    sendMessage: () => {
      dispatch(addMessageActionCreate());
    }
  }
};


const AuthRedirectComponent = WithAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;