import { usersAPI } from '../api/api';
import { updateObjInArray } from '../utils/obj-helpers';

const FOLLOW = 'gui-network/users/FOLLOW';
const UNFOLLOW = 'gui-network/users/UNFOLLOW';
const SET_USERS = 'gui-network/users/SET_USERS';
const SET_CURRENT = 'gui-network/users/SET_CURRENT';
const SET_TOTAL_COUNT = 'gui-network/users/SET_TOTAL_COUNT';
const SET_USERS_MORE = 'gui-network/users/SET_USERS_MORE';
const TOGGLE_IS_FETCHING = 'gui-network/users/TOGGLE_IS_FETCHING';
const BTN_IS_FETCHING = 'gui-network/users/BTN_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'gui-network/users/TOGGLE_IS_FOLLOWING';

const initialState = {
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
        users: updateObjInArray(state.users, action.userId, 'id', { followed: true })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjInArray(state.users, action.userId, 'id', { followed: false })
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_COUNT: {
      return { ...state, totalCount: action.totalCount };
    }
    case SET_USERS_MORE: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case BTN_IS_FETCHING: {
      return { ...state, btnTextIsFetching: action.passIsFetching };
    }
    case TOGGLE_IS_FOLLOWING: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSucces = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT, currentPage });
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });

export const setUsersMore = (users) => ({ type: SET_USERS_MORE, users });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const btnIsFetching = (passIsFetching) => ({ type: BTN_IS_FETCHING, passIsFetching });
export const toggleIsFollowing = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING, isFetching, userId });

export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let response = await usersAPI.getUsers(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.data.items));
  dispatch(setTotalCount(response.data.totalCount));
};

export const getUsersMore = (pageNum, pageSize) => async (dispatch) => {
  dispatch(btnIsFetching(true));
  dispatch(setCurrentPage(pageNum));
  let response = await usersAPI.getUsers(pageNum, pageSize);
  dispatch(btnIsFetching(false));
  dispatch(setUsersMore(response.data.items));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleIsFollowing(true, userId));
  let response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsFollowing(false, userId));
}

export const follow = (userId) => (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.setFollow.bind(usersAPI), followSuccess);
};

export const unfollow = (userId) => (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.setUnfollow.bind(usersAPI), unfollowSucces);
};

export default usersReducer;
