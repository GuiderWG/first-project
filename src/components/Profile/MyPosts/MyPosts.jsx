import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import FormPost from './FormPost/FormPost';

const MyPosts = React.memo(props => {
  console.log('Render1');
  const postsElements = [...props.posts]
    .reverse()
    .map((post) => <Post message={post.message} counts={post.counts} key={post.id}/>);
  
  const addPost = (formData) => {
    props.addPost(formData.postText);
  };
  
  return (
    <div className={s.postsBlock}>
      <h2>My posts</h2>
      <FormPost onSubmit={addPost}/>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
