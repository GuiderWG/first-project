import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navbarReducer from './navbarReducer';

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you', counts: 50 },
        { id: 2, message: 'fine and You?', counts: 31 },
      ],
      newPostText: 'IT',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Victor' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Valera' },
        { id: 6, name: 'Sasha' },
        { id: 7, name: 'Vladimir' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'I like to learning JS React' },
        { id: 3, message: 'Wow it is awesome!!!' },
      ],
      newMessageText: 'Message',
    },
    navbar: {
      menuLinks: [
        { id: 1, url: '/profile', name: 'Profile' },
        { id: 2, url: '/dialogs', name: 'Messages' },
        { id: 3, url: '/news', name: 'News' },
        { id: 4, url: '/music', name: 'Music' },
        { id: 5, url: '/settings', name: 'Settings' },
      ],
      friends: [
        { id: 1, name: 'Dimych', img: 'http://398yingxiao.com/adminvip/images/logo_circle.png' },
        { id: 2, name: 'Sveta', img: 'http://398yingxiao.com/adminvip/images/logo_circle.png' },
        { id: 3, name: 'Sasha', img: 'http://398yingxiao.com/adminvip/images/logo_circle.png' },
      ],
    },
  },
  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.navbar = navbarReducer(this._state.navbar, action);

    this._callSubscriber(this._state);
  },
};

window.store = store;

export default store;
