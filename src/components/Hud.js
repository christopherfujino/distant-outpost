import React, { Component } from 'react';

class Hud extends Component {
  render () {
    const rows = [];
    let index = 0;
    const obj = this.props.interface.game();
    for (let i in obj) {
      if (!obj[i].visible) continue;
      rows.push(
        <tr key={index++}>
          <td>{obj[i].name}</td>
          <td>
            {obj[i].value}
          </td>
        </tr>
      );
    }
    return (
      <div className="col-md-4">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>YOLO</th>
              <th>5</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Hud;
