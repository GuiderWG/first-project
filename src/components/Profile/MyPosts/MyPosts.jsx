import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElements = props.posts.map((post) => <Post message={post.message} counts={post.counts} key={post.id} />);

  const newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <div className={s.form}>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
