import React from 'react';
import s from './preloadar.module.css';

const Preloader = ({ mini }) => (
  <div className={s.preloader}>
    <span className={`${s.load}${mini ? ` ${s.mini}` : ''}`}> </span>
  </div>
);

export default Preloader;
