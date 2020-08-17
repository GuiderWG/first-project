import React from "react";
import {addMessageActionCreate, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogsPage
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;