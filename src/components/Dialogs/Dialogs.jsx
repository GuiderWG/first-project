import React from "react";
import s from "./Dialogs.module.css";
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogsItem/DialogsItem";

const Dialogs = (props) => {

  let dialogElements = props.state.dialogs.map(dialog =>  <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />);

  let messagesElements = props.state.messages.map(message => <MessageItem message={message.message} key={message.id}/> );

  let newMessageElement = React.createRef();

  const sendMessage = () => {
    let message = newMessageElement.current.value
    alert(message);
  }

  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogElements}</div>
        <div className={s.messages}>
          {messagesElements}

          <div className={s.addMessage}>
            <textarea placeholder='Сообщение' ref={newMessageElement}/>
            <button onClick={sendMessage}>Send message22</button>
          </div>
        </div>
      </div>
  )
};

export default Dialogs;