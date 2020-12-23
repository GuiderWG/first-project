import React, { useState } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
  
  let [editMode, setEditMode] =  useState(false);
  let [status, setStatus] =  useState(props.status);
  
  const activateEditMode = () => {
    setEditMode(true);
  }
  
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  };
  
  
  return (
    <div className={s.status}>
      { !editMode &&
        <div onDoubleClick={activateEditMode} className={s.statusText}>
          {props.status}
        </div>
      }
      {editMode &&
      <div className={s.statusSet}>
        <input autoFocus onChange={onStatusChange} onBlur={deactivateEditMode} value={status} type="text" />
        <button onClick={deactivateEditMode}>save</button>
      </div>
      }
    </div>
  );
};

export default ProfileStatusWithHooks;
