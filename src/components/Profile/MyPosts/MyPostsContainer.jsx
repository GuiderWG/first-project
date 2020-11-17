import React from 'react';
import { connect } from 'react-redux';
import { addPost, updateNewPost } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

// const mapDispatchToProps = (dispatch) => ({
//   addPost: () => {
//     dispatch(addPostActionCreator());
//   },
//   updateNewPostText: (text) => {
//     dispatch(updateNewPostActionCreator(text));
//   },
// });

const MyPostsContainer = connect(mapStateToProps, { addPost, updateNewPost })(MyPosts);

export default MyPostsContainer;
