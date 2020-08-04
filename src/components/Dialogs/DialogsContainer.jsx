import React from "react";
import {addMessageActionCreate, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  const sendMessage = () => {
    props.store.dispatch(addMessageActionCreate());
  }

  let onMessageChange = (body) => {
    let action = updateNewMessageActionCreator(body);
    props.store.dispatch(action);
  }
  return (<Dialogs sendMessage={sendMessage} updateNewMessage={onMessageChange}  dialogPage={state} />)
};

export default DialogsContainer;