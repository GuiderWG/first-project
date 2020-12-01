import React from 'react';
import s from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';
import DialogItem from './DialogsItem/DialogsItem';
import MessageForm from './MessageForm/MessageForm';

const Dialogs = (props) => {
  const state = props.dialogPage;

  const dialogElements = state.dialogs.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />
  ));
  const messagesElements = state.messages.map((message) => <MessageItem message={message.message} key={message.id} />);

  const addNewMessage = (formData) => {
    props.addMessage(formData.message);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>
        {messagesElements}

        <MessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
