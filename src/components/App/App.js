import React, { Component } from 'react';
import logo from './logo.svg';
import socketLogo from './socket-logo.png';
import './App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css.map';

import Chat from '../Chat/Chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={socketLogo} className="App-logo" alt="socket-logo" />
          <h1 className="App-title">Welcome to React & Socket Chat!</h1>
        </header>
        <div className="App-intro">
          <Chat />
        </div>
      </div>
    );
  }
}

export default App;
