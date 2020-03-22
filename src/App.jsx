/* eslint-disable react/prop-types */
import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Navbar } from './Components/Navbar/Navbar';
import { Profile } from './Components/Profile/Profile';
import { News } from './Components/News/News';
import { Music } from './Components/Music/Music';
import { Settings } from './Components/Settings/Settings';
import { DialogsContainer } from './Components/Dialogs/DialogsContainer';


const App = () => (
  <div className="app-wrapper">
    <Header />
    <Navbar />
    <div className="app-wrapper__content">
      <Route
        path="/profile"
        render={() => (
          <Profile />
        )}
      />
      <Route
        path="/dialogs"
        render={() => (
          <DialogsContainer />
        )}
      />
      <Route path="/news" render={() => <News />} />
      <Route path="/music" render={() => <Music />} />
      <Route path="/settings" render={() => <Settings />} />

    </div>
  </div>
);

export default App;
