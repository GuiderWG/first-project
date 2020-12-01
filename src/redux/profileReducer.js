import { profileAPI, usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SER_USER_PROFILE = 'SER_USER_PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you', counts: 50 },
    { id: 2, message: 'fine and You?', counts: 31 },
  ],
  profile: null,
  isFetching: false,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, { id: 5, message: action.postText, counts: 0 }],
      };
    }
    case SER_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

export const setUserProfile = (profile) => ({ type: SER_USER_PROFILE, profile });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setUserStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  usersAPI.getUsersProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
    dispatch(toggleIsFetching(false));
  });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setUserStatus(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  });
};

export const addPost = postText => ({ type: ADD_POST, postText });

export default profileReducer;
