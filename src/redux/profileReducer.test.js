import profileReducer, { addPost, deletePost } from './profileReducer';
import React from 'react';

const state = {
  posts: [
    { id: 1, message: 'Hi, how are you', counts: 50 },
    { id: 2, message: 'fine and You?', counts: 31 },
  ]
};

test('new post should be added', () => {
  let action = addPost("IT TEST");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

test('new post correct message', () => {
  let action = addPost("IT TEST");
  let newState = profileReducer(state, action);
  expect(newState.posts[2].message).toBe("IT TEST");
});

test('after deleted', () => {
  let action = deletePost(122);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});