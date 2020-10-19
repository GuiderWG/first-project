import React from 'react';
import s from './preloadar.module.css';

let Preloader = ({ mini }) => {
  return (
      <div className={s.preloader}>
        <span className={`${s.load}${mini ? ' '+s.mini : ''}`}></span>
      </div>
  )
};

export default Preloader;