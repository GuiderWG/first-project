import React from 'react';
import s from '../MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../../utils/validation/validators';
import { Textarea } from '../../../common/FormsControls/FormsControls';

const maxLength = maxLengthCreator(10);

const FormPost = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.form}>
      <Field name={'postText'} component={Textarea} placeholder={'Your message'} validate={[required, maxLength]}/>
      <button>Add post</button>
    </form>
  );
};

export default reduxForm({ form: 'post' })(FormPost);