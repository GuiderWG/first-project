const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SER_USER_PROFILE = 'SER_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you', counts: 50},
    {id: 2, message: 'fine and You?', counts: 31},
  ],
  newPostText: 'IT',
  profile: null,
  isFetching: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, {id: 5, message: state.newPostText, counts: 0}],
      }
    }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    case SER_USER_PROFILE: {
      return {...state, profile: action.profile}
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }
    default:
      return state
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SER_USER_PROFILE, profile});
export const toggleIsFetching = isFetching =>  ({type: TOGGLE_IS_FETCHING, isFetching});
export const updateNewPostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer