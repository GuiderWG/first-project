const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT = 'SET_CURRENT';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_USERS_MORE = 'SET_USERS_MORE';

let initialState = {
  users: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return  {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed:true}
          }
         return user;
        }),
      }
    case UNFOLLOW:
      return  {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed:false}
          }
          return user;
        }),
      }
    case SET_USERS: {
      return {...state, users: action.users}
    }
    case SET_CURRENT: {
      return {...state, currentPage: action.currentPage}
    }
    case SET_TOTAL_COUNT: {
      return {...state, totalCount: action.totalCount}
    }
    case SET_USERS_MORE: {
      return {...state, users: [...state.users, ...action.users]}
    }
    default:
      return state
  }
}

export const follow = userId => ({type: FOLLOW, userId});
export const unfollow = userId =>  ({type: UNFOLLOW, userId});
export const setUsers = users =>  ({type: SET_USERS, users});
export const setCurrent = currentPage =>  ({type: SET_CURRENT, currentPage});
export const setTotalCount = totalCount =>  ({type: SET_TOTAL_COUNT, totalCount});
export const setUsersMore = users =>  ({type: SET_USERS_MORE, users});

export default usersReducer