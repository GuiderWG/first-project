const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you', counts: 50},
    {id: 2, message: 'fine and You?', counts: 31},
  ],
  newPostText: 'IT',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id:5,
        message: state.newPostText,
        counts: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state
    default:
      return state
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer