import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {

  let postsElements = props.posts.map( post =>  <Post message={post.message} counts={post.counts} key={post.id} />);

  let newPostElement = React.createRef()

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostActionCreator(text);
    props.dispatch(action);
  }

  return (
      <div className={s.postsBlock}>
        <h2>My posts</h2>
        <div className={s.form}>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
          <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>{postsElements}</div>
      </div>
  );
};

export default MyPosts;