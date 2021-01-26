import React, {Suspense} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import NavbarContainer from './components/Navbar/NavbarContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/preloader/preloader';
import { compose } from 'redux';
import store from './redux/redux-store';
import { withRouter } from 'react-router-dom';
import {withSuspense} from './hoc/withSuspense';

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

library.add(faCircleNotch);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  
  render() {
    if (!this.props.initialized) {
      return <Preloader/>;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <NavbarContainer/>
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
          <Route path="/dialogs" render={() => <DialogsContainer/>}/>
          <Route path="/news" render={() => <News/>}/>
          <Route path="/music" render={() => <Music/>}/>
          <Route path="/settings" render={() => <Settings/>}/>
          <Route path="/users" render={withSuspense(UsersContainer)}/>
          <Route path="/login" render={() => <Login/>}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App);


const MainApp = (props) => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default MainApp;