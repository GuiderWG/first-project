import React from "react";
import s from "./Post.module.css"


const Post = (props) => {

  return (
      <div className={s.item}>
        <img src="https://im0-tub-ru.yandex.net/i?id=b3f2a9d3e896df25cd12bb0b93cb7219&n=13&exp=1" alt=""/>
        {props.message}
        <div><span>Like {props.counts}</span></div>
      </div>
  );
};

export default Post;