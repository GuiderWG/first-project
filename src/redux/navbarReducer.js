let initialState = {
  menuLinks: [
    {id: 1, url: '/profile', name: "Profile" },
    {id: 2, url: '/dialogs', name: "Messages" },
    {id: 3, url: '/news', name: "News" },
    {id: 4, url: '/music', name: "Music" },
    {id: 5, url: '/settings', name: "Settings" }
  ],
  friends: [
    {id: 1, name: "Dimych", img: 'https://img.icons8.com/color/50/000000/administrator-male--v1.png' },
    {id: 2, name: "Sveta", img: 'https://img.icons8.com/color/50/000000/administrator-male--v1.png' },
    {id: 3, name: "Sasha", img: 'https://img.icons8.com/color/50/000000/administrator-male--v1.png' }
  ],
};

const navbarReducer = (state = initialState, action) => {
  return state
};

export default navbarReducer;