
let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you', counts: 50},
      {id: 2, message: 'fine and You?', counts: 31},
    ],
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
}

export let addPost = (postMessage) => {
  let newPost = {
    id:5,
    message: postMessage,
    counts: 0
  };
  state.profilePage.posts.push(newPost);
}

export default state;