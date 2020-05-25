import React from "react";
import s from './LinkItem.module.css';
import {NavLink} from "react-router-dom";

const LinkItem = (props) => {
  return (
      <div className={s.container}>
        <div className={s.item}>
          <NavLink to={props.url} className={s.link} activeClassName={s.active}>{props.name}</NavLink>
        </div>
      </div>
  );
};

export default LinkItem;