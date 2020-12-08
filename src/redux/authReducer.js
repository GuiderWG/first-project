import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';
//const LOGIN = 'LOGIN';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } });
export const getAuthUserData = () => (dispatch) => {
  dispatch(toggleIsFetching(true));
  authAPI.getMyProfile().then((response) => {
    if (response.data.resultCode === 0) {
      const { id, email, login } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
    dispatch(toggleIsFetching(false));
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Something wrong';
      dispatch(stopSubmit('login', {_error: message}));
    }
    
    dispatch(toggleIsFetching(false));
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    console.log(response);
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export default authReducer;
