import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogsItem/DialogsItem";

const Dialogs = (props) => {

  let dialogElements = props.state.dialogs.map(dialog =>  <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />);

  let messagesElements = props.state.messages.map(message => <MessageItem message={message.message} key={message.id}/> );

  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogElements}</div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
  )
};

export default Dialogs;