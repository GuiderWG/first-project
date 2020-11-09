import React from "react";
import s from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogsItem/DialogsItem";
import {Redirect} from 'react-router-dom';

const Dialogs = (props) => {
  let state = props.dialogPage;

  let dialogElements = state.dialogs.map(dialog =>  <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />);
  let messagesElements = state.messages.map(message => <MessageItem message={message.message} key={message.id}/> );

  const sendMessage = () => {
    props.sendMessage();
  }

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessage(text);
  }

  if (!props.isAuth) return <Redirect to={"/login"}/>;

  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogElements}</div>
        <div className={s.messages}>
          {messagesElements}

          <div className={s.addMessage}>
            <textarea onChange={onMessageChange}  value={state.newMessageText} />
            <button onClick={sendMessage}>Send message</button>
          </div>
        </div>
      </div>
  )
};

export default Dialogs;