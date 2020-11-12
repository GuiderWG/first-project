import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './LinkItem.module.css';

const LinkItem = (props) => (
  <div className={s.container}>
    <div className={s.item}>
      <NavLink to={props.url} className={s.link} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  </div>
);

export default LinkItem;
