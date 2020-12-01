const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
  dialogs: [
    { id: 1, name: 'Света1' },
    { id: 2, name: 'Андрей' },
    { id: 3, name: 'Victor' },
    { id: 4, name: 'Sveta' },
    { id: 5, name: 'Valera' },
    { id: 6, name: 'Sasha' },
    { id: 7, name: 'Vladimir' },
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'I like to learning JS React' },
    { id: 3, message: '222Wow it is awesome!!!' },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: action.newMessage }],
      };
    }

    default:
      return state;
  }
};

export const addMessage = newMessage => ({ type: ADD_MESSAGE, newMessage });

export default dialogsReducer;
