import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Splash from './components/Splash';
import New from './components/New';
import Hud from './components/Hud';
import Main from './components/Main';
import gameInterface from './gameInterface';
import Game from './Game';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      interface: gameInterface(this),
      tagline: "the future of the human race",
      time: 0,
      game: new Game()
    }
  }
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">distant outpost</Link>
            <span className="navbar-text">{this.state.tagline}</span>
          </header>
          <div className="container">
            <div className="row">
              <Route exact path="/" component={Splash} />
              <Route path="/new" component={New} />
              <Route path="/game" render={props => {
                return <Hud interface={this.state.interface} />
              }} />
              <Route exact path="/game" render={props => {
                return <Main interface={this.state.interface} />
              }} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
