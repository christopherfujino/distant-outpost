import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Splash extends Component {
  render () {
    return (
      <main className="col-md-8 offset-md-2">
        <div className="jumbotron">
          <h1>the future begins today</h1>
          <p>
            <Link className="btn btn-primary" to="/game/new">start a journey...</Link>
          </p>
        </div>
      </main>
    )
  }
}

export default Splash;
