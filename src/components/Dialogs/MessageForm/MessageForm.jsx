import React from 'react';
import s from '../Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.addMessage}>
      <div>
        <Field placeholder={'Your message'} name={'message'} component={'textarea'}/>
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: 'message' })(MessageForm);