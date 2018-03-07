import React, {Component} from "react";

class Main extends Component {
  componentDidMount () {
    const {gameInterface} = this.props;
    gameInterface.setTagline(`day ${gameInterface.getTime()}`);
  }

  render () {
    return (
      <main className="col-md-8">
        <h1>
          {"play da gamez!"}
        </h1>
      </main>
    );
  }
}

export default Main;
