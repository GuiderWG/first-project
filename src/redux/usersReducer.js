const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    {id: 1, followed: false, fullName: 'Dmitriy', status: 'I\'m okay', imgUrl:'https://i.stack.imgur.com/T17Mh.png?s=328&g=1', location: {city:'Minsk', country:'Belarus'}},
    {id: 2, followed: false, fullName: 'Vladimir', status: 'The day is cold now', imgUrl:'https://i.stack.imgur.com/T17Mh.png?s=328&g=1', location: {city:'Samara', country:'Russia'}},
    {id: 3, followed: true, fullName: 'Rail', status: 'I hope that everything alright', imgUrl:'https://i.stack.imgur.com/T17Mh.png?s=328&g=1', location: {city:'Kiev', country:'Ukraine'}},
    {id: 4, followed: false, fullName: 'Jane', status: 'it looks very strange', imgUrl:'https://i.stack.imgur.com/T17Mh.png?s=328&g=1', location: {city:'Paris', country:'France'}},
  ],
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
      return {...state, users: [...state.users, ...action.users]}
    }
    default:
      return state
  }
}

export const followAC = userId => ({type: FOLLOW, userId});
export const unfollowAC = userId =>  ({type: UNFOLLOW, userId});
export const setUsersAC = users =>  ({type: SET_USERS, users});

export default usersReducer