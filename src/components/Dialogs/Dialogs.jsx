import React from "react";
import s from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogsItem/DialogsItem";
import {addMessageActionCreate, updateNewMessageActionCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {

  let dialogElements = props.state.dialogs.map(dialog =>  <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />);

  let messagesElements = props.state.messages.map(message => <MessageItem message={message.message} key={message.id}/> );

  const sendMessage = () => {
    props.dispatch(addMessageActionCreate());
  }

  let onMessageChange = (e) => {
    let text = e.target.value;
    let action = updateNewMessageActionCreator(text);
    props.dispatch(action);
  }
  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogElements}</div>
        <div className={s.messages}>
          {messagesElements}

          <div className={s.addMessage}>
            <textarea onChange={onMessageChange}  value={props.state.newMessageText} /> {/*ref={newMessageElement}*/}
            <button onClick={sendMessage}>Send message</button>
          </div>
        </div>
      </div>
  )
};

export default Dialogs;