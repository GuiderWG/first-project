import React from 'react';
import { Redirect } from 'react-router-dom';
import s from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';
import DialogItem from './DialogsItem/DialogsItem';

const Dialogs = (props) => {
  const state = props.dialogPage;

  const dialogElements = state.dialogs.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />
  ));
  const messagesElements = state.messages.map((message) => <MessageItem message={message.message} key={message.id} />);

  const sendMessage = () => {
    props.sendMessage();
  };

  const onMessageChange = (e) => {
    const text = e.target.value;
    props.updateNewMessage(text);
  };

  if (!props.isAuth) return <Redirect to="/login" />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>
        {messagesElements}

        <div className={s.addMessage}>
          <textarea onChange={onMessageChange} value={state.newMessageText} />
          <button onClick={sendMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
