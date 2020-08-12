const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogs: [
    {id: 1, name: 'Dimych222'},
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
  newMessageText: 'Message'
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 4,
        message: state.newMessageText
      }
      let stateCopy = {...state};
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = '';
      return stateCopy;
    }

    case  UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = {...state};
      stateCopy.newMessageText = action.newMessage;
      return stateCopy;
    }

    default:
      return state;
  }
};

export const addMessageActionCreate = () => ({type: ADD_MESSAGE});

export const updateNewMessageActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

export default dialogsReducer