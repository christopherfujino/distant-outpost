import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Main extends Component {
  componentDidMount () {
    this.props.interface.setTagline(`day ${this.props.interface.getTime()}`);
  }
  render () {
    return (
      <main className="col-md-8 offset-md-2">
        <h1>play da gamez!</h1>
      </main>
    )
  }
}

export default Main;
