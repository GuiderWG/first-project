import React from 'react';
import s from './FormsControls.module.css';
import { Field } from 'redux-form';


export const Textarea = ({ input, meta: {touched, error}, ...props }) => {

  const hasError = touched && error;

  return (
    <div className={`${s.formControl}${hasError ? ' ' + s.error : ''}`}>
      <textarea {...input} {...props} />
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Input = ({ input, meta: {touched, error}, ...props }) => {

    const hasError = touched && error;

    return (
        <div className={`${s.formControl}${hasError ? ' ' + s.error : ''}`}>
            <input {...input} {...props} />
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const createField = (placeholder, name, validators, component, props = {}, text = '') =>
  (<div>
    <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props}/> {(text && <span>{text}</span>)}
  </div>);
