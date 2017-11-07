import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class New extends Component {
  render () {
    return (
      <main className="col-md-8 offset-md-2">
        <form>
          <div class="form-group">
            <label>new game suckahz!</label>
          </div>
          <Link to="/game" className="btn btn-primary">start</Link>
        </form>
      </main>
    )
  }
}

export default New;
