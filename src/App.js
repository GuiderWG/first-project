import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import ProfileContainer from "./components/Profile/ProfileContainer";

library.add(faCircleNotch)

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header/>
        <NavbarContainer/>
        <div className="app-wrapper-content">
          <Route path='/profile'
                 render={() => <ProfileContainer/>}/>
          <Route path='/dialogs'
                 render={() => <DialogsContainer/>}/>
          <Route path='/news'
                 render={() => <News/>}/>
          <Route path='/music'
                 render={() => <Music/>}/>
          <Route path='/settings'
                 render={() => <Settings/>}/>
          <Route path='/users'
                 render={() => <UsersContainer/>}/>
        </div>
      </div>
  );
};

export default App;

