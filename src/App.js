import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Splash from './components/Splash';
import New from './components/New';
import Main from './components/Main';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">distant outpost</a>
            <span className="navbar-text">the future of the human race</span>
          </header>
          <div className="container">
            <div className="row">
              <Route exact path="/" component={Splash} />
              <Route path="/game/new" component={New} />
              <Route exact path="/game" component={Main} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
