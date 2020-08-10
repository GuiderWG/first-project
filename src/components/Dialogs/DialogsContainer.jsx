import React from "react";
import {addMessageActionCreate, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

  return (
      <StoreContext.Consumer>
        { store => {
          let state = store.getState().dialogsPage;
          const sendMessage = () => {
            store.dispatch(addMessageActionCreate());
          }
          let onMessageChange = (body) => {
            let action = updateNewMessageActionCreator(body);
            store.dispatch(action);
          }
          return <Dialogs sendMessage={sendMessage} updateNewMessage={onMessageChange} dialogPage={state}/>
        }
      }
      </StoreContext.Consumer>
  )
}

export default DialogsContainer;