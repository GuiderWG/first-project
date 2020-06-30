const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you', counts: 50},
        {id: 2, message: 'fine and You?', counts: 31},
      ],
      newPostText: 'IT',
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Sasha'},
        {id: 7, name: 'Vladimir'}
      ],
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'I like to learning JS React'},
        {id: 3, message: 'Wow it is awesome!!!'}
      ],
      newMessageText: 'MS'
    },
    navbar: {
      menuLinks: [
        {id: 1, url: '/profile', name: "Profile" },
        {id: 2, url: '/dialogs', name: "Messages" },
        {id: 3, url: '/news', name: "News" },
        {id: 4, url: '/music', name: "Music" },
        {id: 5, url: '/settings', name: "Settings" }
      ],
      friends: [
        {id: 1, name: "Dimych", img: 'http://398yingxiao.com/adminvip/images/logo_circle.png' },
        {id: 2, name: "Sveta", img: 'http://398yingxiao.com/adminvip/images/logo_circle.png' },
        {id: 3, name: "Sasha", img: 'http://398yingxiao.com/adminvip/images/logo_circle.png' }
      ],
    },
  },
  _callSubscriber () {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },

  addMessage () {
    let newMessage = {
      id: 4,
      message: this._state.dialogsPage.newMessageText
    }
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },
  updateNewMessageText (newMessage) {
    this._state.dialogsPage.newMessageText = newMessage;
    this._callSubscriber(this._state);
  },
  addPost () {
    let newPost = {
      id:5,
      message: this._state.profilePage.newPostText,
      counts: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id:5,
        message: this._state.profilePage.newPostText,
        counts: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);

    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 4,
        message: this._state.dialogsPage.newMessageText
      }
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newMessage;
      this._callSubscriber(this._state);
    }

  }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const addMessageActionCreate = () => ({type: ADD_MESSAGE});

export const updateNewMessageActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});



window.store = store;

export default store;