import React from 'react';
import s from '../Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validation/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength = maxLengthCreator(15);

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.addMessage}>
      <div>
        <Field placeholder={'Your message'} name={'message'} component={Textarea} validate={[required, maxLength]}/>
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: 'message' })(MessageForm);