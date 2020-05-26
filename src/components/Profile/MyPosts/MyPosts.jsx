import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = (props) => {

  let postsElements = props.posts.map( post =>  <Post message={post.message} counts={post.counts} key={post.id} />);

  let newPostElement = React.createRef()

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
      <div className={s.postsBlock}>
        <h2>My posts</h2>
        <div className={s.form}>
          <textarea placeholder='Сообщение' ref={newPostElement}/>
          <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>{postsElements}</div>
      </div>
  );
};

export default MyPosts;