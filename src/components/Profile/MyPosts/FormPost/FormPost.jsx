import React from 'react';
import s from '../MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';

const FormPost = (props) => {
  return (
      <form onSubmit={props.handleSubmit} className={s.form}>
        <Field name={'postText'} component={'textarea'} placeholder={'Your message'} />
        <button>Add post</button>
      </form>
  );
};

export default reduxForm({ form: 'post' })(FormPost);