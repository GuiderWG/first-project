import {usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT = 'SET_CURRENT';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_USERS_MORE = 'SET_USERS_MORE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const BTN_IS_FETCHING = 'BTN_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

let initialState = {
  users: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  isFetching: true,
  btnTextIsFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true};
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false};
          }
          return user;
        }),
      };
    case SET_USERS: {
      return {...state, users: action.users};
    }
    case SET_CURRENT: {
      return {...state, currentPage: action.currentPage};
    }
    case SET_TOTAL_COUNT: {
      return {...state, totalCount: action.totalCount};
    }
    case SET_USERS_MORE: {
      return {...state, users: [...state.users, ...action.users]};
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching};
    }
    case BTN_IS_FETCHING: {
      return {...state, btnTextIsFetching: action.passIsFetching};
    }
    case TOGGLE_IS_FOLLOWING: {
      return {
        ...state,
        followingInProgress:
            action.isFetching ?
                [...state.followingInProgress, action.userId] :
                state.followingInProgress.filter(id => id !== action.userId)
      };
    }
    default:
      return state;
  }
};

export const follow = userId => ({type: FOLLOW, userId});
export const unfollow = userId => ({type: UNFOLLOW, userId});
export const setUsers = users => ({type: SET_USERS, users});
export const setCurrent = currentPage => ({type: SET_CURRENT, currentPage});
export const setTotalCount = totalCount => ({type: SET_TOTAL_COUNT, totalCount});
export const setUsersMore = users => ({type: SET_USERS_MORE, users});
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});
export const btnIsFetching = passIsFetching => ({type: BTN_IS_FETCHING, passIsFetching});
export const toggleIsFollowing = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING, isFetching, userId});


export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetching(true));

  usersAPI
      .getUsers(currentPage, pageSize)
      .then(response => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.data.items));
        dispatch(setTotalCount(response.data.totalCount));
      });
};

export const getUsersMore = (pageNum, pageSize) => (dispatch) => {
  dispatch(btnIsFetching(true));
  dispatch(setCurrent(++pageNum));

  usersAPI
      .getUsers(pageNum, pageSize)
      .then(response => {
        dispatch(btnIsFetching(false));
        dispatch(setUsersMore(response.data.items));
      });
};


export default usersReducer;