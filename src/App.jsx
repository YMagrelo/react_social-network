/* eslint-disable react/prop-types */
import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Navbar } from './Components/Navbar/Navbar';
import { Profile } from './Components/Profile/Profile';
import { Dialogs } from './Components/Dialogs/Dialogs';
import { News } from './Components/News/News';
import { Music } from './Components/Music/Music';
import { Settings } from './Components/Settings/Settings';

const App = (props) => (
  <div className="app-wrapper">
    <Header />
    <Navbar />
    <div className="app-wrapper__content">
      <Route
        path="/profile"
        render={() => (
          <Profile
            profilePage={props.state.profilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
          />
        )}
      />
      <Route
        path="/dialogs"
        render={() => (
          <Dialogs
            dialogsPage={props.state.dialogsPage}
            addNewMessage={props.addNewMessage}
            updateNewMessageText={props.updateNewMessageText}
          />
        )}
      />
      <Route path="/news" render={() => <News />} />
      <Route path="/music" render={() => <Music />} />
      <Route path="/settings" render={() => <Settings />} />

    </div>
  </div>
);

export default App;
