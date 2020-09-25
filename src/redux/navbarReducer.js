const SET_FRIENDS = 'SET_FRIENDS';

let initialState = {
  menuLinks: [
    {id: 1, url: '/profile', name: "Profile" },
    {id: 2, url: '/dialogs', name: "Messages" },
    {id: 3, url: '/news', name: "News" },
    {id: 4, url: '/music', name: "Music" },
    {id: 5, url: '/settings', name: "Settings" },
    {id: 6, url: '/users', name: "Users" },
  ],
  friends: [],
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRIENDS:
      return {...state, friends: action.friends};

    default:
      return state;
  }
};

export let setFriendsOnline = friends => ({type: SET_FRIENDS, friends})

export default navbarReducer;